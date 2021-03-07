import { ContentKind } from '../../../constants/constants';
import { MapDbObject } from '../../../models/Map/Map';
import { sanitizeEnemy } from '../../enemies/shared/sanitize';
import { MapObjectResponse } from './types';

export const sanitizeMap = (doc: MapDbObject): MapObjectResponse => {
    const tiles = doc.tiles.map((row) =>
        row.map((tile) => {
            switch (tile.kind) {
                case ContentKind.Enemy:
                    return { kind: ContentKind.Enemy, enemy: sanitizeEnemy(tile.enemy) };

                default:
                    return tile;
            }
        }),
    );

    return {
        id: doc.id,
        name: doc.name,
        backgroundUrl: doc.backgroundUrl,
        tiles,
    };
};
