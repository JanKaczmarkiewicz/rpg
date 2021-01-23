import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { ContentType, TileData } from '../../store/map/types';
import { CharacterSprite, TileSprite, TileTooltip, TileWrapper } from './styles';

export type TileProps = {
    tile: TileData;
    size: number;
    onClick: (tile: TileData) => void;
    showNpcs: boolean;
    showEnemies: boolean;
    showCollisions: boolean;
};

const Tile: FunctionComponent<TileProps> = ({ tile, size, onClick, showCollisions, showNpcs, showEnemies }) => {
    const onTileClick = () => {
        onClick(tile);
    };

    const isTileHasCollision =
        showCollisions && (tile.content?.type === ContentType.Enemy || tile.content?.type === ContentType.Npc); // or enemy or npc
    const isTileHaveEnemy = showEnemies && tile.content?.type === ContentType.Enemy;
    const isTileHaveNpc = showNpcs && tile.content?.type === ContentType.Npc;

    return (
        <TileWrapper onClick={onTileClick}>
            {isTileHaveEnemy && <CharacterSprite src={tile.content?.imageUrl} />}
            {isTileHaveNpc && <div>npc</div>}
            {isTileHasCollision && <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} />}
            <TileTooltip />
        </TileWrapper>
    );
};

export default Tile;
