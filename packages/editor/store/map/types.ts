import { EnemyObjectResponse } from '@rpg/backend/src/routes/enemies/shared/types';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shared/types';
import { setTileContent } from './actions/setTileContent';

export enum EditMode {
    Wall = 'Wall',
    Npc = 'Npc',
    Enemy = 'Enemy',
}

export type TileData = MapObjectResponse['tiles'][number][number];

export type State = {
    map: MapObjectResponse & { tileSize: number };
    editor: {
        mode: EditMode | null;
        collisionData: {};
        // TODO: add typings
        npcData: { selected: any | null };
        enemyData: { selected: EnemyObjectResponse | null };
    };
};
export type Action = ReturnType<typeof setTileContent>;
export type Reducer = (state: State, action: Action) => State;
