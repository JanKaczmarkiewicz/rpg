import produce from 'immer';
import { loadImage } from '../../helpers/loadImage';
import { setEditorModeMutation, SET_EDITOR_MODE } from './actions/setEditorMode';
import { setTileCollisionMutation, SET_TILE_COLLISION } from './actions/setTileCollision';
import { Reducer, State } from './types';

export const config: State = {
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
    editor: {
        mode: null,
    },
};

const MUTATIONS_MAP = {
    [SET_TILE_COLLISION]: setTileCollisionMutation,
    [SET_EDITOR_MODE]: setEditorModeMutation,
};

const reducer: Reducer = (state: State = config, action) => {
    const mutation = MUTATIONS_MAP[action.type];

    if (!mutation) return state;

    return produce(state, (draft) => {
        mutation(draft, action.payload);
    });
};

export default reducer;
