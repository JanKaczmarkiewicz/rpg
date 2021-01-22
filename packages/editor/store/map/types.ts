import { setTileCollision } from './actions/setTileCollision';

export enum EditMode {
    Collision = 'Collision',
    Npc = 'Npc',
    Enemy = 'Enemy',
}
export type TileData = {
    id: string;
    x: number;
    y: number;
    collision: boolean;
};
export type EditorData =
    | { mode: null }
    | { mode: EditMode.Collision }
    | { mode: EditMode.Npc }
    | { mode: EditMode.Enemy; selectedEnemy: null | string };
export type State = {
    map: { tiles: TileData[][]; backgroundImageUrl: string; tileSize: number };
    editor: { mode: EditMode | null };
};
export type Action = ReturnType<typeof setTileCollision>;
export type Reducer = (state: State, action: Action) => State;
