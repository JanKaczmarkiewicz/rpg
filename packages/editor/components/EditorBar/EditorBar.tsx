import { Box } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import MainMenuBlade from './Blades/MainManuBlade';

const DRAWER_WIDTH = 240;

const EditorBar: FunctionComponent = () => {
    return (
        <Box p={2}>
            <MainMenuBlade />
        </Box>
    );
};

export default EditorBar;
