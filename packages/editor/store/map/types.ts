import { CharacterDefinition } from '../../components/CharactersLibrary/types';
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
    editor: {
        mode: EditMode | null;
        collisionData: {};
        npcData: { selected: CharacterDefinition | null };
        enemyData: { selected: CharacterDefinition | null };
    };
};
export type Action = ReturnType<typeof setTileCollision>;
export type Reducer = (state: State | undefined, action: Action) => State;
