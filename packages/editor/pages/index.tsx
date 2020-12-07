import {
  AppBar, Box, Drawer, Toolbar,
} from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import EditedMap from '../components/EditedMap/EditedMap';
import EditorBar from '../components/EditorBar/EditorBar';

const drawerWidth = 240;

export default function Home() {
  return (
    <div>
      <Head>
        <title>RPG editor</title>
      </Head>

      <AppBar
        position="fixed"
      >
        <Toolbar>

          RPG editor
        </Toolbar>
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
