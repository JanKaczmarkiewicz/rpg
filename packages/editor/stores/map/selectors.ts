import { State } from './types';

export const selectTileSize = (state: State): number => state.map.tileSize;
export const selectMapVerticalSize = (state: State): number => state.map.tiles.length;
export const selectMapHorizontalSize = (state: State): number => state.map.tiles[0].length;
export const selectTiles = (state: State): State['map']['tiles'] => state.map.tiles;
export const selectMapOffset = (state: State): State['map']['offset'] => state.map.offset;

export const selectMapBackground = (state: State): string => state.map.backgroundImageUrl;

export const selectMapSize = (state: State) => {
    const tileSize = selectTileSize(state);
    const horizontalSize = selectMapHorizontalSize(state);
    const verticalSize = selectMapVerticalSize(state);
    const offset = selectMapOffset(state);

    const width = tileSize * horizontalSize + offset.left * tileSize + offset.right * tileSize;
    const height = tileSize * verticalSize + offset.top * tileSize + offset.bottom * tileSize;

    return {
        height,
        width,
    };
};
