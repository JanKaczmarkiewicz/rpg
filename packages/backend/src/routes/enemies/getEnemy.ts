import { ResponseStatus } from '../../constants/constants';
import { sanitizeEnemy } from './shered/sanitize';
import { Request, Response } from 'express';
import validate, { errors } from '../../middleware/validate';
import { object, string } from 'yup';

type GetEnemyParams = { id: string };

export const validateGetEnemyParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const getEnemy = async (req: Request<GetEnemyParams>, res: Response) => {
    const { Enemy } = req.context.models;
    const { id } = req.params;

    const enemy = await Enemy.findById(id);

    if (!enemy) return res.status(ResponseStatus.NotFound).json(errors([{ path: 'id', messages: ['Not found'] }]));

    res.status(ResponseStatus.Success).json(sanitizeEnemy(enemy));
};

export default getEnemy;
