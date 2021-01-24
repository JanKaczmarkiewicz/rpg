import React, { createElement, FunctionComponent } from 'react';
import { Box, Button } from '@material-ui/core';
import { useLocalize } from '../../localization/useLocalize';
import { EditMode } from '../../store/map/types';

// Blades
import MainMenuBlade from './blades/MainMenu/MainMenu';
import NpcsEditor from './blades/NpcsEditor/NpcsEditor';
import EnemiesEditor from './blades/EnemiesEditor/EnemiesEditor';
import CollisionsEditor from './blades/CollisionsEditor/CollisionsEditor';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditorMode } from '../../store/map/selectors';
import { setEditorMode } from '../../store/map/actions/setEditorMode';

const BLADES: { [key in EditMode]: React.FunctionComponent<{}> } = {
    [EditMode.Wall]: CollisionsEditor,
    [EditMode.Npc]: NpcsEditor,
    [EditMode.Enemy]: EnemiesEditor,
};

const EditorBar: FunctionComponent = () => {
    const localize = useLocalize();
    const dispatch = useDispatch();

    const editorMode = useSelector(selectEditorMode);

    const onBackClick = (): void => {
        dispatch(setEditorMode({ mode: null }));
    };

    const onMenuItemClick = (mode: EditMode): void => {
        dispatch(setEditorMode({ mode }));
    };

    const getBlade = (): React.ReactNode => {
        if (!editorMode) return <MainMenuBlade onMenuItemClick={onMenuItemClick} />;

        return (
            <>
                <Button onClick={onBackClick}>{localize('back')}</Button>
                {createElement(BLADES[editorMode])}
            </>
        );
    };

    return <Box p={2}>{getBlade()}</Box>;
};

export default EditorBar;
