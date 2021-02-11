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
    type: ContentType;
}

export interface Character extends TileContent {
    id: string;
    name: string;
    imageUrl: string;
}

export interface Enemy extends Character {
    type: ContentType.Enemy;
    level: number;
    description: string;
}

export interface Wall extends TileContent {
    type: ContentType.Wall;
}

export interface Npc extends Character {
    type: ContentType.Npc;
    level: number;
    description: string;
}

export type TileData = {
    id: string;
    content: Npc | Enemy | Wall | null;
};
export type State = {
    map: {
        tiles: TileData[][];
        backgroundImageUrl: string;
        tileSize: number;
    };
    editor: {
        mode: EditMode | null;
        collisionData: {};
        npcData: { selected: Npc | null };
        enemyData: { selected: Enemy | null };
    };
};
export type Action = ReturnType<typeof setTileContent>;
export type Reducer = (state: State | undefined, action: Action) => State;
