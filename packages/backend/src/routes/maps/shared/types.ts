import { ContentKind } from '../../../constants/constants';
import { MapDbObject } from '../../../models/Map/Map';
import { EnemyObjectResponse } from '../../enemies/shared/types';

type MapTileResponse =
    | { kind: ContentKind.Enemy; enemy: EnemyObjectResponse }
    | { kind: ContentKind.Wall }
    | { kind: ContentKind.Empty }
    | { kind: ContentKind.Npc };

export type MapObjectResponse = Pick<MapDbObject, 'id' | 'name' | 'backgroundUrl'> & {
    tiles: MapTileResponse[][];
};
