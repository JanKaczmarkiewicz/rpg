import { ResponseStatus } from '../../constants/constants';
import { sanitizeEnemy } from './shered/sanitize';
import { Request, Response } from 'express';

const getEnemies = async (req: Request, res: Response) => {
    const { Enemy } = req.context.models;

    const maps = await Enemy.find();

    res.status(ResponseStatus.Success).json(maps.map(sanitizeEnemy));
};

export default getEnemies;
