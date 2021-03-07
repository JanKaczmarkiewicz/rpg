import React, { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shared/types';
import EditedMap from '../../components/EditedMap/EditedMap';
import AppHeader from '../../components/AppHeader/AppHeader';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import useStoreInitialize from '../../hooks/useStoreInitialize';
import client from '../../apiClient/client';
import localize from '../../localization/localize';
import { Button } from '@material-ui/core';

type MapProps = { map: MapObjectResponse };

const queryClient = new QueryClient();

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

    const onMapSave = () => {};

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Head>
                    <title>RPG editor</title>
                </Head>
                <AppHeader
                    text={localize('map')}
                    actions={
                        <Button onClick={onMapSave} variant="contained">
                            {localize('save')}
                        </Button>
                    }
                />
                <LeftMenu />
                <main>
                    <EditedMap />
                </main>
            </Provider>
        </QueryClientProvider>
    );
};

export const getServerSideProps: GetServerSideProps<MapProps, { id: string }> = async ({ params }) => {
    const result = await client.map.getOne(params || { id: '' });
    return {
        props: { map: result },
    };
};

export default dynamic(() => Promise.resolve(MapRoute), { ssr: false });
