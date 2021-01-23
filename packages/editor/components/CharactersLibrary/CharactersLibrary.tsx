import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import CharacterCard from './CharacterCard';
import { CharacterLibraryProps } from './types';

const CharacterLibrary: FunctionComponent<CharacterLibraryProps> = ({ onSelect, selectedCharacterId, characters }) => {
    return (
        <Grid container spacing={2}>
            {characters.map((character) => (
                <Grid item xs={12} key={character.id}>
                    <CharacterCard
                        selected={(selectedCharacterId && selectedCharacterId === character.id) || undefined}
                        characterDefinition={character}
                        onClick={onSelect}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CharacterLibrary;
