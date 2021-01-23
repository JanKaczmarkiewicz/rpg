import { CharacterDefinition } from '../../../components/CharactersLibrary/types';
import { createAction } from '../../helpers';
import { State } from '../types';

export type SetEditorSelectedEnemyMutation = (state: State, payload: SetEditorSelectedEnemyPayload) => void;
export type SetEditorSelectedEnemyPayload = {
    character: CharacterDefinition;
};

export const SET_EDITOR_SELECTED_ENEMY = 'SET_EDITOR_SELECTED_ENEMY';
export const setEditorSelectedEnemy = createAction<SetEditorSelectedEnemyPayload, typeof SET_EDITOR_SELECTED_ENEMY>(
    SET_EDITOR_SELECTED_ENEMY,
);
export const setEditorSelectedEnemyMutation: SetEditorSelectedEnemyMutation = (state, { character }) => {
    state.editor.enemyData.selected = character;
};
