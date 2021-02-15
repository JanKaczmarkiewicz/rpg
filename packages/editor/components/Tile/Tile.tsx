import { ContentKind } from '@rpg/backend/src/constants/constants';
import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { Enemy, Npc, TileData, Wall } from '../../store/map/types';
import { CharacterSprite, TileSprite, TileTooltip, TileWrapper } from './styles';

export type TileProps = {
    tile: TileData;
    size: number;
    onClick: (tile: TileData) => void;
    showNpcs: boolean;
    showEnemies: boolean;
    showCollisions: boolean;
};

const isEnemy = (content: TileData): content is Enemy => content?.kind === ContentKind.Enemy;
const isNpc = (content: TileData): content is Npc => content?.kind === ContentKind.Npc;
const isWall = (content: TileData): content is Wall => content?.kind === ContentKind.Wall;

const Tile: FunctionComponent<TileProps> = ({ tile, size, onClick, showCollisions, showNpcs, showEnemies }) => {
    const onTileClick = () => {
        onClick(tile);
    };

    const isTileHasCollision = showCollisions && (isEnemy(tile) || isNpc(tile) || isWall(tile));

    return (
        <TileWrapper onClick={onTileClick}>
            {showEnemies && isEnemy(tile) && <CharacterSprite src={tile.content.imageUrl} />}
            {showNpcs && isNpc(tile) && <div>npc</div>}
            {isTileHasCollision && <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} />}
            <TileTooltip />
        </TileWrapper>
    );
};

export default Tile;
