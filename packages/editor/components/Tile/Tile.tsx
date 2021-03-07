import { ContentKind } from '@rpg/backend/src/constants/constants';
import { EnemyObjectResponse } from '@rpg/backend/src/routes/enemies/shared/types';
import React, { FunctionComponent } from 'react';
import { loadImage } from '../../helpers/loadImage';
import { TileData } from '../../store/map/types';
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

    const isTileHasCollision = showCollisions && tile.kind !== ContentKind.Empty;

    return (
        <TileWrapper onClick={onTileClick}>
            {showEnemies && tile.kind === ContentKind.Enemy && <CharacterSprite src={tile.enemy.imageUrl} />}
            {showNpcs && tile.kind === ContentKind.Npc && <div>npc</div>}
            {isTileHasCollision && <TileSprite src={loadImage('wall', 'svg')} alt="wall" size={size} />}
            <TileTooltip />
        </TileWrapper>
    );
};

export default Tile;
