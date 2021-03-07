import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { FunctionComponent } from 'react';

const AppHeader: FunctionComponent = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">Map editor</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default AppHeader;
