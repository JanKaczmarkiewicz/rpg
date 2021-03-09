import { RequestHandler } from 'express';
import { object, string } from 'yup';
import { MixedSchema } from 'yup/lib/mixed';
import { ResponseStatus } from '../../constants/constants';
import { error } from '../../middleware/errorHandler';
import validate from '../../middleware/validate';
import { CreateMapBody, mapPayloadShape } from './createMap';
import { sanitizeMap } from './shared/sanitize';
import { MapObjectResponse } from './shared/types';

export type UpdateMapBody = Partial<CreateMapBody>;

export type UpdateMapParams = { id: string };

export type UpdateMapResponse = MapObjectResponse;

const makePropertiesOptional = (schema: Record<string, MixedSchema>): Record<string, MixedSchema> => {
    Object.values(schema).forEach((schemaPath) => schemaPath.optional());
    return schema;
};

const validateUpdateMapBody = validate('body', object(makePropertiesOptional(mapPayloadShape)));

const validateUpdateMapParams = validate(
    'params',
    object({
        id: string().objectId().required(),
    }),
);

const updateMap: RequestHandler<UpdateMapParams, {}, UpdateMapBody> = async (req, res, next) => {
    const { Map } = req.context.models;
    const {
        body,
        params: { id },
    } = req;

    const map = await Map.findByIdAndUpdate(id, body, { new: true });

    if (!map) return next(error.notFound({ id: ['Map not found'] }));

    return res.status(ResponseStatus.Created).json(sanitizeMap(map));
};

export default {
    handler: updateMap,
    validators: [validateUpdateMapBody, validateUpdateMapParams],
};
