import { RequestHandler } from 'express';
import { object, string } from 'yup';
import validate from '../../middleware/validate';
import { error } from '../../middleware/errorHandler';
import { sanitizeEnemy } from './shared/sanitize';
import { EnemyObjectResponse } from './shared/types';
import { ResponseStatus } from '../../constants/constants';

export type GetEnemyParams = { id: string };

export type GetEnemyResult = EnemyObjectResponse;

export const validateGetEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const getEnemy: RequestHandler<GetEnemyParams> = async (req, res, next) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const enemy = await Enemy.findById(id);

    if (!enemy) return next(error.notFound({ id: ['Map not found.'] }));

    return res.status(ResponseStatus.Success).json(sanitizeEnemy(enemy));
};

export default getEnemy;
