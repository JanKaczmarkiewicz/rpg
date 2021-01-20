import React, { createElement, FunctionComponent, useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { EditMode } from './constants';
import { useLocalize } from '../../localization/useLocalize';

// Blades
import MainMenuBlade from './blades/MainMenu/MainMenu';
import NpcsEditor from './blades/NpcsEditor/NpcsEditor';
import EnemiesEditor from './blades/EnemiesEditor/EnemiesEditor';
import CollisionsEditor from './blades/CollisionsEditor/CollisionsEditor';

const BLADES = {
    [EditMode.Collision]: CollisionsEditor,
    [EditMode.Npc]: NpcsEditor,
    [EditMode.Enemy]: EnemiesEditor,
};

const EditorBar: FunctionComponent = () => {
    const [mode, setMode] = useState<null | EditMode>(null);
    const localize = useLocalize();

    const onBackClick = (): void => {
        setMode(null);
    };

    const getBlade = (): React.ReactNode => {
        if (!mode) return <MainMenuBlade onMenuItemClick={setMode} />;
        return (
            <>
                <Button onClick={onBackClick}>{localize('back')}</Button>
                {createElement(BLADES[mode])}
            </>
        );
    };

    return <Box p={2}>{getBlade()}</Box>;
};

export default EditorBar;
