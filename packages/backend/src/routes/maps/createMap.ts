import { string, object, array, lazy } from 'yup';
import { ContentKind, ResponseStatus } from '../../constants/constants';
import validate from '../../middleware/validate';
import { Content, MapDbObject } from '../../models/Map/Map';
import { sanitizeMap } from './shered/sanitize';
import { Request, Response } from 'express';

export type CreateMapBody = Pick<MapDbObject, 'backgroundUrl' | 'name' | 'tiles'>;

export const validateCreateMapBody = validate(
    'body',
    object({
        backgroundUrl: string().required(),
        name: string().required(),
        tiles: array()
            .of(
                array().of(
                    lazy(({ kind }: Content) => {
                        switch (kind) {
                            case ContentKind.Enemy:
                                return object({
                                    enemy: string().objectId().required(),
                                });
                            case ContentKind.Npc:
                                return object({
                                    npc: string().objectId().required(),
                                });
                            case ContentKind.Wall:
                                return object({});
                            case ContentKind.Empty:
                                return object({});
                            default:
                                return object({ kind: string().oneOf(Object.keys(ContentKind)).required() });
                        }
                    }) as any,
                ),
            )
            .test('areRowsEqualLengths', 'the rows are of different lengths', (rows) =>
                rows ? rows.every((row) => row?.length === rows[0]!.length) : true,
            )
            .required(),
    }),
);

const createMap = async (req: Request<{}, {}, CreateMapBody>, res: Response) => {
    const { Map } = req.context.models;
    const newMap = req.body;

    try {
        const doc = await new Map(newMap).save();

        return res.status(ResponseStatus.Created).json(sanitizeMap(doc));
    } catch (error) {
        // TODO: send error message
        return res.status(ResponseStatus.BadRequest).json();
    }
};

export default createMap;
