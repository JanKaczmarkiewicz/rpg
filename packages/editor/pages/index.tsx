import { AppBar, Box, Drawer, Toolbar } from '@material-ui/core';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react';
import EditedMap from '../components/EditedMap/EditedMap';
import EditorBar from '../components/EditorBar/EditorBar';

function Home() {
    return (
        <div>
            <Head>
                <title>RPG editor</title>
            </Head>

            <AppBar position="fixed">
                <Toolbar>RPG editor</Toolbar>
            </AppBar>

            <Drawer open variant="permanent">
                <EditorBar />
            </Drawer>

            <Box>
                <Toolbar />
                <EditedMap />
            </Box>
        </div>
    );
}

// TODO: disabling ssr for now becouse it couses mismatch in css classes. See: https://material-ui.com/guides/server-rendering/
export default dynamic(() => Promise.resolve(Home), {
    ssr: false,
});
