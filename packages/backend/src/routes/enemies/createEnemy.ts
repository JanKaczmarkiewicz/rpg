import { Request, Response, RequestHandler } from 'express';
import { number, object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import validate from '../../middleware/validate';
import { EnemyDbObject } from '../../models/Enemy/Enemy';
import { sanitizeEnemy } from './shared/sanitize';
import { EnemyObjectResponse } from './shared/types';

export type CreateEnemyBody = Pick<EnemyDbObject, 'description' | 'name' | 'level' | 'imageUrl'>;

export type CreateEnemyResult = EnemyObjectResponse;

export const validateCreateEnemyBody = validate(
    'body',
    object({
        name: string().required(),
        backgroundUrl: string().required(),
        level: number().required(),
        description: string().required(),
    }),
);

const createEnemy: RequestHandler = async (req, res, next) => {
    const { Enemy } = req.context.models;
    const newEnemy = req.body;

    try {
        const enemy = await new Enemy(newEnemy).save();

        return res.status(ResponseStatus.Created).json(sanitizeEnemy(enemy));
    } catch {}
};

export default createEnemy;
