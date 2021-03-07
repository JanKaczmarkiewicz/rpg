import { EnemyObjectResponse } from '@rpg/backend/src/routes/enemies/shared/types';
import { createAction } from '../../helpers';
import { State } from '../types';

export type SetEditorSelectedEnemyMutation = (state: State, payload: SetEditorSelectedEnemyPayload) => void;
export type SetEditorSelectedEnemyPayload = {
    enemy: EnemyObjectResponse;
};

export const SET_EDITOR_SELECTED_ENEMY = 'SET_EDITOR_SELECTED_ENEMY';
export const setEditorSelectedEnemy = createAction<SetEditorSelectedEnemyPayload, typeof SET_EDITOR_SELECTED_ENEMY>(
    SET_EDITOR_SELECTED_ENEMY,
);
export const setEditorSelectedEnemyMutation: SetEditorSelectedEnemyMutation = (state, { enemy }) => {
    state.editor.enemyData.selected = enemy;
};
