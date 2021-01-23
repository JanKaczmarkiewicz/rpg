import { createAction } from '../../helpers';
import { State, EditMode } from '../types';

export type SetEditorModeMutation = (state: State, payload: SetEditorModePayload) => void;
export type SetEditorModePayload = {
    mode: EditMode | null;
};

export const SET_EDITOR_MODE = 'SET_EDITOR_MODE';
export const setEditorMode = createAction<SetEditorModePayload, typeof SET_EDITOR_MODE>(SET_EDITOR_MODE);
export const setEditorModeMutation: SetEditorModeMutation = (state, { mode }) => {
    state.editor.mode = mode;
};
