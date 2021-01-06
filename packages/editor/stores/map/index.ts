import { createStore } from 'redux';

import { State } from './types';
import mapGenerator from '../../components/mapGenerator';
import { loadImage } from '../../helpers/loadImage';

const map = mapGenerator();

export const config = {
    map: {
        backgroundImageUrl: loadImage('mocked-map', 'png'),
        tileSize: 48,
        offset: {
            top: 1,
            left: 1,
            bottom: 1,
            right: 1,
        },
        tiles: Array(14)
            .fill(null)
            .map((_, i) =>
                Array(22)
                    .fill(null)
                    .map((__, j) => ({
                        id: `${i}-${j}`,
                        x: i,
                        y: j,
                        isMoveable: false,
                    })),
            ),
    },
};

const reducer = (state: State = config, _action) => state;

export const store = createStore(reducer);
