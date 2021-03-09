import { RequestHandler } from 'express';
import { object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import { sanitizeMap } from './shared/sanitize';
import { MapObjectResponse } from './shared/types';
import validate from '../../middleware/validate';
import { error } from '../../middleware/errorHandler';

export type GetMapParams = { id: string };

export type GetMapResponse = MapObjectResponse;

const validateGetMapParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const getMap: RequestHandler<GetMapParams> = async (req, res, next) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findById(id);

    if (!map) return next(error.notFound({ id: ['Map not found.'] }));

    return res.status(ResponseStatus.Success).json(sanitizeMap(map));
};

export default { handler: getMap, validators: [validateGetMapParams] };
