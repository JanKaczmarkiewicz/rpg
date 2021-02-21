import { ResponseStatus } from '../../constants/constants';
import { sanitizeEnemy } from './shared/sanitize';
import { Request, RequestHandler, Response } from 'express';
import { EnemyObjectResponse } from './shared/types';

export type GetEnemiesResponse = EnemyObjectResponse[];

const getEnemies: RequestHandler = async (req, res) => {
    const { Enemy } = req.context.models;

    const maps = await Enemy.find();

    res.status(ResponseStatus.Success).json(maps.map(sanitizeEnemy));
};

export default getEnemies;
