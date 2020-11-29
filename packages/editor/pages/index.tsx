import { Box } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import EditedMap from '../components/EditedMap/EditedMap';
import EditorBar from '../components/EditorBar/EditorBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RPG editor</title>
      </Head>

      <Box flexDirection="center" alignItems="center">
        <EditorBar />
        <EditedMap />
      </Box>
    </div>
  );
}
