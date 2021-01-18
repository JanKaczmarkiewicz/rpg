import { State } from './types';

export const selectTileSize = (state: State): number => state.map.tileSize;
export const selectMapVerticalSize = (state: State): number => state.map.tiles.length;
export const selectMapHorizontalSize = (state: State): number => state.map.tiles[0].length;
export const selectMapHeight = (state: State): number => {
    const verticalSize = selectMapVerticalSize(state);
    const offset = selectMapOffset(state);
    return verticalSize + offset.top + offset.bottom;
};
export const selectMapWidth = (state: State): number => {
    const horizontalSize = selectMapHorizontalSize(state);
    const offset = selectMapOffset(state);
    return horizontalSize + offset.left + offset.right;
};
export const selectTiles = (state: State): State['map']['tiles'] => state.map.tiles;
export const selectMapOffset = (state: State): State['map']['offset'] => state.map.offset;
export const selectMapBackground = (state: State): string => state.map.backgroundImageUrl;
