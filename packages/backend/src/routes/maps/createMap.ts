import { RequestHandler } from 'express';
import { array, lazy, object, string } from 'yup';
import { ContentKind, ResponseStatus } from '../../constants/constants';
import { error } from '../../middleware/errorHandler';
import validate from '../../middleware/validate';
import { sanitizeMap } from './shared/sanitize';
import { MapObjectResponse } from './shared/types';
import { MapDbObject } from '../../models/Map/Map';

type Content =
    | { kind: ContentKind.Enemy; enemy: string }
    | { kind: ContentKind.Wall }
    | { kind: ContentKind.Empty }
    | { kind: ContentKind.Npc };

export type CreateMapBody = Pick<MapDbObject, 'backgroundUrl' | 'name'> & { tiles: Content[][] };

export type CreateMapResponse = MapObjectResponse;

const tileSchemas = {
    [ContentKind.Enemy]: object({
        enemy: string().objectId().required(),
    }),
    [ContentKind.Npc]: object({
        npc: string().objectId().required(),
    }),
    [ContentKind.Wall]: object({}),
    [ContentKind.Empty]: object({}),
};

const defaultTileSchema = object({ kind: string().oneOf(Object.keys(ContentKind)).required() });

export const mapPayloadShape = {
    backgroundUrl: string(),
    name: string(),
    tiles: array()
        .of(array().of(lazy(({ kind }: Content) => tileSchemas[kind] || defaultTileSchema) as any))
        .test('areRowsEqualLengths', 'the rows are of different lengths', (rows) =>
            rows ? rows.every((row) => row?.length === rows[0]!.length) : true,
        ),
};

const validateCreateMapBody = validate('body', object(mapPayloadShape));

const createMap: RequestHandler<{}, {}, CreateMapBody> = async (req, res, next) => {
    const { Map } = req.context.models;
    const newMap = req.body;

    try {
        const map = await new Map(newMap).save();

        return res.status(ResponseStatus.Created).json(sanitizeMap(map));
    } catch {
        return next(error.unknown());
    }
};

export default { handler: createMap, validators: [validateCreateMapBody] };
