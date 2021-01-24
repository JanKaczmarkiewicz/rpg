import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { ContentType, Enemy, Npc, TileData, Wall } from '../../store/map/types';
import { CharacterSprite, TileSprite, TileTooltip, TileWrapper } from './styles';

export type TileProps = {
    tile: TileData;
    size: number;
    onClick: (tile: TileData) => void;
    showNpcs: boolean;
    showEnemies: boolean;
    showCollisions: boolean;
};

const isEnemy = (content: TileData['content']): content is Enemy => content?.type === ContentType.Enemy;
const isNpc = (content: TileData['content']): content is Npc => content?.type === ContentType.Npc;
const isWall = (content: TileData['content']): content is Wall => content?.type === ContentType.Wall;

const Tile: FunctionComponent<TileProps> = ({ tile, size, onClick, showCollisions, showNpcs, showEnemies }) => {
    const onTileClick = () => {
        onClick(tile);
    };

    const isTileHasCollision = showCollisions && (isEnemy(tile.content) || isNpc(tile.content) || isWall(tile.content));

    return (
        <TileWrapper onClick={onTileClick}>
            {showEnemies && isEnemy(tile.content) && <CharacterSprite src={tile.content.imageUrl} />}
            {showNpcs && isNpc(tile.content) && <div>npc</div>}
            {isTileHasCollision && <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} />}
            <TileTooltip />
        </TileWrapper>
    );
};

export default Tile;
