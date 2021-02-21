import { ResponseStatus } from '../../constants/constants';
import { sanitizeEnemy } from './shared/sanitize';
import { Request, RequestHandler, Response } from 'express';
import validate, { errors } from '../../middleware/validate';
import { object, string } from 'yup';
import { EnemyObjectResponse } from './shared/types';

export type GetEnemyParams = { id: string };

export type GetEnemyResult = EnemyObjectResponse;

export const validateGetEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const getEnemy: RequestHandler<GetEnemyParams> = async (req, res) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const enemy = await Enemy.findById(id);

    if (!enemy) return res.status(ResponseStatus.NotFound).json(errors([{ path: 'id', messages: ['Not found'] }]));

    res.status(ResponseStatus.Success).json(sanitizeEnemy(enemy));
};

export default getEnemy;
