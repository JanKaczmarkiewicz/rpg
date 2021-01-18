import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { State } from '../../store/map/types';
import { TileSprite, TileTooltip, TileWrapper } from './styles';

const Tile: FunctionComponent<{
    tile: State['map']['tiles'][0][0];
    size: number;
}> = ({ tile, size }) => (
    <TileWrapper>
        {tile.collision ? <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} /> : null}
        <TileTooltip />
    </TileWrapper>
);

export default Tile;
