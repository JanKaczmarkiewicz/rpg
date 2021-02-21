import { ContentKind } from '@rpg/backend/src/constants/constants';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shared/types';
import { setTileContent } from './actions/setTileContent';

export enum EditMode {
    Wall = 'Wall',
    Npc = 'Npc',
    Enemy = 'Enemy',
}

interface TileContent {
    kind: ContentKind;
}

export interface Enemy extends TileContent {
    kind: ContentKind.Enemy;
    enemy: {
        id: string;
        imageUrl: string;
        level: number;
        name: string;
    };
}

export interface Wall extends TileContent {
    kind: ContentKind.Wall;
}

export interface Npc extends TileContent {
    kind: ContentKind.Npc;
}

export type TileData = MapObjectResponse['tiles'][number][number];

export type State = {
    map: MapObjectResponse & { tileSize: number };
    editor: {
        mode: EditMode | null;
        collisionData: {};
        npcData: { selected: Npc | null };
        enemyData: { selected: Enemy | null };
    };
};
export type Action = ReturnType<typeof setTileContent>;
export type Reducer = (state: State, action: Action) => State;
