import React from 'react';
import { Grid } from '@material-ui/core';
import CharacterCard from './CharacterCard';
import { CharacterCardDetails, CharacterLibraryProps } from './types';
import { Character } from '../../store/map/types';

const CharacterLibrary = <T extends Character>({
    onSelect,
    selectedCharacterId,
    characters,
    getCharacterCardDetails,
}: CharacterLibraryProps<T>) => {
    const onCharacterSelect = ({ __data }: CharacterCardDetails & { __data: T }) => {
        onSelect(__data);
    };

    return (
        <Grid container spacing={2}>
            {characters.map((character) => (
                <Grid item xs={12} key={character.id}>
                    <CharacterCard
                        selected={(selectedCharacterId && selectedCharacterId === character.id) || undefined}
                        characterDetails={{ ...getCharacterCardDetails(character), __data: character }}
                        onClick={onCharacterSelect}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CharacterLibrary;
