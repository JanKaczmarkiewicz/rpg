import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import EditedMap from '../../components/EditedMap/EditedMap';
import Header from '../../components/AppHeader/AppHeader';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import { Provider } from 'react-redux';
import { GetServerSideProps } from 'next';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shared/types';
import useStoreInitialize from '../../hooks/useStoreInitialize';
import client from '../../apiClient/client';

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
                <EditedMap />
            </main>
        </Provider>
    );
};

export const getServerSideProps: GetServerSideProps<MapProps, { id: string }> = async ({ params }) => {
    const result = await client.map().getOne(params || { id: '' });
    return {
        props: { map: result },
    };
};

export default dynamic(() => Promise.resolve(MapRoute), { ssr: false });
