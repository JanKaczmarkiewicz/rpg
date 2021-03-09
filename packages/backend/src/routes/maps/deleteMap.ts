import { RequestHandler } from 'express';
import { object, string } from 'yup';
import { ResponseStatus } from '../../constants/constants';
import validate from '../../middleware/validate';
import { error } from '../../middleware/errorHandler';
import { MapObjectResponse } from './shared/types';
import { sanitizeMap } from './shared/sanitize';

export type DeleteMapParams = { id: string };

export type DeleteMapResponse = MapObjectResponse;

const validateDeleteMapParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const deleteMap: RequestHandler<DeleteMapParams> = async (req, res, next) => {
    const { Map } = req.context.models;
    const { id } = req.params;

    const map = await Map.findByIdAndDelete(id);

    if (!map) return next(error.notFound({ id: ['Map not found.'] }));

    return res.status(ResponseStatus.Success).json(sanitizeMap(map));
};

export default { handler: deleteMap, validators: [validateDeleteMapParams] };
