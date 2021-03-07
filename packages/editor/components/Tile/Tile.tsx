import { ContentKind } from '@rpg/backend/src/constants/constants';
import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { TileData } from '../../store/map/types';
import { CharacterSprite, TileSprite, TileTooltip, TileWrapper } from './styles';

export type TileProps = {
    tile: TileData;
    size: number;
    onClick: (tile: TileData) => void;
    showNpc: boolean;
    showEnemy: boolean;
    showCollision: boolean;
};

const Tile: FunctionComponent<TileProps> = ({ tile, size, onClick, showCollision, showNpc, showEnemy }) => {
    const onTileClick = () => {
        onClick(tile);
    };

    const isTileHasCollision = showCollision && tile.kind !== ContentKind.Empty;

    return (
        <TileWrapper onClick={onTileClick}>
            {showEnemy && tile.kind === ContentKind.Enemy && <CharacterSprite src={tile.enemy.imageUrl} />}
            {showNpc && tile.kind === ContentKind.Npc && <div>npc</div>}
            {isTileHasCollision && <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} />}
            <TileTooltip />
        </TileWrapper>
    );
};

export default Tile;
