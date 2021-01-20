import { Drawer, makeStyles, Toolbar } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import EditorBar from '../EditorBar/EditorBar';

const DRAWER_WIDTH = 260;

const useDrawerStyles = makeStyles(() => ({
    paper: {
        width: DRAWER_WIDTH,
    },
}));

const LeftMenu: FunctionComponent = () => {
    const drawerClasses = useDrawerStyles();

    return (
        <Drawer variant="permanent" classes={drawerClasses}>
            <Toolbar />
            <EditorBar />
        </Drawer>
    );
};

export default LeftMenu;
