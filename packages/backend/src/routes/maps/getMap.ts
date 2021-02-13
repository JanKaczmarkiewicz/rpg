import { object, string } from 'yup';
import validate from '../../middleware/validate';
import { ResponseStatus } from '../../constants/constants';
import { sanitizeMap } from './shered/sanitize';
import { Request, Response } from 'express';

type GetMapParams = { id: string };

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

    if (!map) return res.status(ResponseStatus.NotFound).json({ message: 'not found' });

    res.status(ResponseStatus.Success).json(sanitizeMap(map));
};

export default getMap;
