import { object, string, array, lazy } from 'yup';
import { ContentKind } from '../constants/constants';
import validate from '../middlewares/validate';
import { Content } from '../models/Map/Map';

export const validateMapsPostBody = validate(
    'body',
    object({
        backgroundUrl: string().required(),
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
