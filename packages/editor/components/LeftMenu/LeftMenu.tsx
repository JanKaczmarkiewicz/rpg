import { Drawer, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import EditorBar from '../EditorBar/EditorBar';

const LeftMenu: FunctionComponent = () => {
    return (
        <Drawer variant="permanent">
            <Toolbar />
            <EditorBar />
        </Drawer>
    );
};

export default LeftMenu;
