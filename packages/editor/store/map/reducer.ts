import produce from 'immer';
import { setEditorModeMutation, SET_EDITOR_MODE } from './actions/setEditorMode';
import { setEditorSelectedEnemyMutation, SET_EDITOR_SELECTED_ENEMY } from './actions/setEditorSelectedEnemy';
import { setTileContentMutation, SET_TILE_CONTENT } from './actions/setTileContent';
import { Reducer } from './types';

const MUTATIONS_MAP = {
    [SET_TILE_CONTENT]: setTileContentMutation,
    [SET_EDITOR_MODE]: setEditorModeMutation,
    [SET_EDITOR_SELECTED_ENEMY]: setEditorSelectedEnemyMutation,
};

const reducer: Reducer = (state, action) => {
    const mutation = MUTATIONS_MAP[action.type];

    if (!mutation) return state;

    return produce(state, (draft) => {
        mutation(draft, action.payload);
    });
};

export default reducer;
