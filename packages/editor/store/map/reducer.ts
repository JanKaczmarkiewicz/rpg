import produce from 'immer';
import { loadImage } from '../../helpers/loadImage';
import { setTileCollisionMutation, SET_TILE_COLLISION } from './actions/setTileCollision';
import { Reducer } from './types';

export const config = {
    map: {
        backgroundImageUrl: loadImage('mocked-map', 'png'),
        tileSize: 48,
        tiles: Array(16)
            .fill(null)
            .map((_, i) =>
                Array(24)
                    .fill(null)
                    .map((__, j) => ({
                        id: `${i}-${j}`,
                        x: j,
                        y: i,
                        collision: false,
                    })),
            ),
    },
};

const MUTATIONS_MAP = {
    [SET_TILE_COLLISION]: setTileCollisionMutation,
};

const reducer: Reducer = (state = config, action) => {
    const mutation = MUTATIONS_MAP[action.type];

    if (!mutation) return state;

    return produce(state, (draft) => {
        mutation(draft, action.payload);
    });
};

export default reducer;
