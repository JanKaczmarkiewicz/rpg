import produce from 'immer';
import { loadImage } from '../../helpers/loadImage';
import { setTileCollisionMutation, SET_TILE_COLLISION } from './actions/setTileCollision';
import { State, Action } from './types';

type Reducer = (state: State, action: Action) => State;

export const config = {
    map: {
        backgroundImageUrl: loadImage('mocked-map', 'png'),
        tileSize: 48,
        offset: {
            top: 1,
            left: 1,
            bottom: 1,
            right: 1,
        },
        tiles: Array(14)
            .fill(null)
            .map((_, i) =>
                Array(22)
                    .fill(null)
                    .map((__, j) => ({
                        id: `${i}-${j}`,
                        x: i,
                        y: j,
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
