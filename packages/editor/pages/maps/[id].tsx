import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Toolbar } from '@material-ui/core';
import EditedMap from '../../components/EditedMap/EditedMap';
import Header from '../../components/AppHeader/AppHeader';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import { Provider } from 'react-redux';
import { GetServerSideProps } from 'next';
import { HttpMethod } from '@rpg/backend/src/constants/constants';
import { client } from '../../apiClient/client';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shered/types';
import useStoreInitialize from '../../hooks/useStoreInitialize';

type MapProps = { map: MapObjectResponse };

const MapRoute: FunctionComponent<MapProps> = ({ map }) => {
    const store = useStoreInitialize({
        map: { ...map, tileSize: 32 },
        editor: {
            mode: null,
            collisionData: {},
            enemyData: { selected: null },
            npcData: { selected: null },
        },
    });

    return (
        <Provider store={store}>
            <Head>
                <title>RPG editor</title>
            </Head>
            <Header />
            <LeftMenu />
            <main>
                <Toolbar />
                <EditedMap />
            </main>
        </Provider>
    );
};

export const getServerSideProps: GetServerSideProps<MapProps, { id: string }> = async ({ params: { id } = {} }) => {
    const result = await client<MapObjectResponse>({ method: HttpMethod.Get, url: `/maps/${id}` });
    return {
        props: { map: result },
    };
};

export default dynamic(() => Promise.resolve(MapRoute), { ssr: false });
