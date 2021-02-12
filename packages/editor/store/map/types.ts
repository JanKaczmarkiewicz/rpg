import { MapObjectResponse } from '@rpg/backend/src/routes/maps/types';
import { setTileContent } from './actions/setTileContent';

export enum EditMode {
    Wall = 'Wall',
    Npc = 'Npc',
    Enemy = 'Enemy',
}

export enum ContentType {
    Enemy = 'Enemy',
    Npc = 'Npc',
    Wall = 'Wall',
}

interface TileContent {
    kind: ContentType;
}

export interface Character extends TileContent {
    id: string;
    name: string;
    imageUrl: string;
}

export interface Enemy extends Character {
    kind: ContentType.Enemy;
    level: number;
    description: string;
}

export interface Wall extends TileContent {
    kind: ContentType.Wall;
}

export interface Npc extends Character {
    type: ContentType.Npc;
    level: number;
    description: string;
}

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
