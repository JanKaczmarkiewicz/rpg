import { Box } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import MainMenuBlade from './Blades/MainManuBlade';

const EditorBar: FunctionComponent = () => {
    return (
        <Box p={2}>
            <MainMenuBlade />
        </Box>
    );
};

export default EditorBar;
