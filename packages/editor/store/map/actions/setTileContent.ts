import { createAction } from '../../helpers';
import { State, TileData } from '../types';

export type SetTileContentMutation = (state: State, payload: SetTileContentPayload) => void;
export type SetTileContentPayload = {
    x: number;
    y: number;
    content: { kind: TileData['kind'] };
};

export const SET_TILE_CONTENT = 'SET_TILE_CONTENT';
export const setTileContent = createAction<SetTileContentPayload, typeof SET_TILE_CONTENT>(SET_TILE_CONTENT);
export const setTileContentMutation: SetTileContentMutation = (state, { x, y, content }) => {
    state.map.tiles[y][x] = content;
};
