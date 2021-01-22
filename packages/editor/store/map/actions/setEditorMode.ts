import { createAction } from '../../helpers';
import { State, EditMode } from '../types';

export type SetEditorModeMutation = (state: State, payload: SetEditorModePayload) => void;
export type SetEditorModePayload = {
    mode: EditMode | null;
};

const getInitialEditorModeData = (mode: SetEditorModePayload['mode']) => {
    switch (mode) {
        case EditMode.Collision:
            return { mode: EditMode.Collision };
        case EditMode.Npc:
            return { mode: EditMode.Npc };
        case EditMode.Enemy:
            return { mode: EditMode.Enemy };
        default:
            return { mode: null };
    }
};

export const SET_EDITOR_MODE = 'SET_EDITOR_MODE';
export const setEditorMode = createAction<SetEditorModePayload, typeof SET_EDITOR_MODE>(SET_EDITOR_MODE);
export const setEditorModeMutation: SetEditorModeMutation = (state, { mode }) => {
    state.editor = getInitialEditorModeData(mode);
};
