import { RequestHandler } from 'express';
import { object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import { sanitizeEnemy } from './shared/sanitize';
import { EnemyObjectResponse } from './shared/types';
import { error } from '../../middleware/errorHandler';
import validate from '../../middleware/validate';

export type DeleteEnemyParams = { id: string };

export type DeleteEnemyResponse = EnemyObjectResponse;

export const validateDeleteEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteEnemy: RequestHandler<DeleteEnemyParams> = async (req, res, next) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const deletedEnemy = await Enemy.findByIdAndDelete(id);

    if (!deletedEnemy) return next(error.notFound({ id: ['Enemy not found.'] }));

    return res.status(ResponseStatus.Success).json(sanitizeEnemy(deletedEnemy));
};

export default deleteEnemy;
