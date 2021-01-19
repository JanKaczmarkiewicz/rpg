import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box, Toolbar } from '@material-ui/core';

import EditedMap from '../components/EditedMap/EditedMap';
import Header from '../components/AppHeader/AppHeader';
import LeftMenu from '../components/LeftMenu/LeftMenu';

function Home() {
    return (
        <div>
            <Head>
                <title>RPG editor</title>
            </Head>
            <Header />
            <LeftMenu />
            <main>
                <EditedMap />
            </main>
        </div>
    );
}

// TODO: disabling ssr for now because it causes mismatch in css classes. See: https://material-ui.com/guides/server-rendering/
export default dynamic(() => Promise.resolve(Home), {
    ssr: false,
});
