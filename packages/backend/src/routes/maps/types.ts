import { MapDbObject } from '../../models/Map/Map';

export type MapObjectResponse = Required<Pick<MapDbObject, 'id' | 'name' | 'backgroundUrl' | 'tiles'>>;
