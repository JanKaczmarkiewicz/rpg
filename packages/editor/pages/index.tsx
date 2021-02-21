import React, { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import { MapObjectResponse } from '@rpg/backend/src/routes/maps/shared/types';
import Header from '../components/AppHeader/AppHeader';
import AddMapButton from '../components/AddMapButton/AddMapButton';
import client from '../apiClient/client';

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
    const res = await client.map().getMany();

    return {
        props: {
            maps: res,
        },
    };
};

export default Maps;
