import { ResponseStatus } from '../../constants/constants';
import { sanitizeMap } from './shered/sanitize';
import { Request, Response } from 'express';

const getMaps = async (req: Request, res: Response) => {
    const { Map } = req.context.models;

    const maps = await Map.find();

    res.status(ResponseStatus.Success).json(maps.map(sanitizeMap));
};

export default getMaps;
