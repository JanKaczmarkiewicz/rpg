import { ResponseStatus } from '../../constants/constants';
import { sanitizeMap } from './shared/sanitize';
import { RequestHandler } from 'express';
import { MapObjectResponse } from './shared/types';

export type GetMapsResponse = MapObjectResponse[];

const getMaps: RequestHandler = async (req, res) => {
    const { Map } = req.context.models;

    const maps = await Map.find();

    res.status(ResponseStatus.Success).json(maps.map(sanitizeMap));
};

export default getMaps;
