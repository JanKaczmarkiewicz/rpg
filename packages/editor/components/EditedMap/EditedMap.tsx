import React, { FunctionComponent } from 'react';
import MapBackground from '../MapBackground/MapBackground';
import MapGrid from '../MapGrid/MapGrid';
import { GameMap } from './styles';

const EditedMap: FunctionComponent = () => {
    return (
        <GameMap>
            <MapBackground />
            <MapGrid />
        </GameMap>
    );
};

export default EditedMap;
