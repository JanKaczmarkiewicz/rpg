import { createAction } from '../../helpers';
import { State } from '../types';

export type SetTileCollisionMutation = (state: State, payload: SetTileCollisionPayload) => void;
export type SetTileCollisionPayload = {
    x: number;
    y: number;
    collision: boolean;
};

export const SET_TILE_COLLISION = 'SET_TILE_COLLISION';
export const setTileCollision = createAction<SetTileCollisionPayload, typeof SET_TILE_COLLISION>(SET_TILE_COLLISION);
export const setTileCollisionMutation: SetTileCollisionMutation = (state, { x, y, collision }) => {
    state.map.tiles[y][x].collision = collision;
};
