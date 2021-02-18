import { object, string } from 'yup';
import validate, { errors } from '../../middleware/validate';
import { ResponseStatus } from '../../constants/constants';
import { sanitizeMap } from './shered/sanitize';
import { Request, Response } from 'express';
import { MapObjectResponse } from './shered/types';

export type GetMapParams = { id: string };

export type GetMapResponse = MapObjectResponse;

export const validateGetMapParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const getMap = async (req: Request<GetMapParams>, res: Response) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findById(id);

    if (!map) return res.status(ResponseStatus.NotFound).json(errors([{ path: 'id', messages: ['Not found'] }]));

    res.status(ResponseStatus.Success).json(sanitizeMap(map));
};

export default getMap;
