import { State } from './types';

export const selectTileSize = (state: State): number => state.map.tileSize;
export const selectMapVerticalSize = (state: State): number => state.map.tiles.length;
export const selectMapHorizontalSize = (state: State): number => state.map.tiles[0].length;
export const selectTiles = (state: State): State['map']['tiles'] => state.map.tiles;
export const selectMapBackground = (state: State): string => state.map.backgroundImageUrl;
