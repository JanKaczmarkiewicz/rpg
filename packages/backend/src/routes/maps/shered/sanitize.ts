import { MapDbObject } from '../../../models/Map/Map';
import { MapObjectResponse } from './types';

export const sanitizeMap = (doc: MapDbObject): MapObjectResponse => ({
    id: doc.id,
    name: doc.name,
    backgroundUrl: doc.backgroundUrl,
    tiles: doc.tiles,
});
