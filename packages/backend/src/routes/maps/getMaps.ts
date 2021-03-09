import { RequestHandler } from 'express';
import { ResponseStatus } from '../../constants/constants';
import { sanitizeMap } from './shared/sanitize';
import { MapObjectResponse } from './shared/types';

export type GetMapsResponse = MapObjectResponse[];

const getMaps: RequestHandler = async (req, res) => {
    const { Map } = req.context.models;

    const maps = await Map.find();

    return res.status(ResponseStatus.Success).json(maps.map(sanitizeMap));
};

export default { handler: getMaps, validators: [] };
