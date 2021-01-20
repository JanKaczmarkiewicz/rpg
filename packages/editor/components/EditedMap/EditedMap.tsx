import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import MapBackground from '../MapBackground/MapBackground';
import MapGrid from '../MapGrid/MapGrid';
import { GameMap } from './styles';
import emotionTheme from '../../theme/emotionTheme';

const EditedMap: FunctionComponent = () => {
    return (
        <ThemeProvider theme={emotionTheme}>
            <GameMap>
                <MapBackground />
                <MapGrid />
            </GameMap>
        </ThemeProvider>
    );
};

export default EditedMap;
