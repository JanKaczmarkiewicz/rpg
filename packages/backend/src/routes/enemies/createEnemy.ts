import { Request, Response } from 'express';
import { number, object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import validate from '../../middleware/validate';
import { sanitizeEnemy } from './shered/sanitize';

export const validateCreateEnemyBody = validate(
    'body',
    object({
        name: string().required(),
        backgroundUrl: string().required(),
        level: number().required(),
        description: string().required(),
    }),
);

const createEnemy = async (req: Request, res: Response) => {
    const { Enemy } = req.context.models;
    const newEnemy = req.body;

    try {
        const enemy = await new Enemy(newEnemy).save();

        return res.status(ResponseStatus.Created).json(sanitizeEnemy(enemy));
    } catch (error) {
        // TODO: send proper error message
        return res.status(ResponseStatus.BadRequest).json();
    }
};

export default createEnemy;
