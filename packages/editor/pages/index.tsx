import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/AppHeader/AppHeader';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { HttpMethod } from '@rpg/backend/src/constants/constants';
import { client } from '../apiClient/client';
import { GetStaticProps } from 'next';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shered/types';
import AddMapButton from '../components/AddMapButton/AddMapButton';

type MapsProps = {
    maps: MapObjectResponse[];
};

const Maps: FunctionComponent<MapsProps> = ({ maps }) => {
    return (
        <div>
            <Head>
                <title>Maps</title>
            </Head>
            <Header />
            <main>
                <Container maxWidth="sm">
                    <AddMapButton />
                    <List>
                        {maps.map(({ id, name, tiles }) => (
                            <Link href={`/maps/${id}`} key={id}>
                                <ListItem button key={id}>
                                    <ListItemText
                                        primary={name}
                                        secondary={`${tiles.length} x ${tiles[0]?.length ?? 0}`}
                                    />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Container>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps<MapsProps> = async () => {
    const res = await client<MapObjectResponse[]>({ url: '/maps', method: HttpMethod.Get });

    return {
        props: {
            maps: res,
        },
    };
};

export default Maps;
