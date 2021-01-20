import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { State } from '../../store/map/types';
import { TileSprite, TileTooltip, TileWrapper } from './styles';

type TileData = State['map']['tiles'][0][0];

export type TileProps = {
    tile: TileData;
    size: number;
    onClick: (tile: TileData) => void;
};

const Tile: FunctionComponent<TileProps> = ({ tile, size, onClick }) => {
    const onTileClick = () => {
        onClick(tile);
    };

    return (
        <TileWrapper onClick={onTileClick}>
            {tile.collision ? <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} /> : null}
            <TileTooltip />
        </TileWrapper>
    );
};

export default Tile;
