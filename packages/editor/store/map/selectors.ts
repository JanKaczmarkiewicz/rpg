import { State } from './types';

export const selectTileSize = (state: State): number => state.map.tileSize;
export const selectMapVerticalSize = (state: State): number => state.map.tiles.length;
export const selectMapHorizontalSize = (state: State): number => state.map.tiles[0]?.length ?? 0;
export const selectTiles = (state: State): State['map']['tiles'] => state.map.tiles;
export const selectMapBackground = (state: State): string => state.map.backgroundUrl;

export const selectEditorMode = (state: State) => state.editor.mode;
export const selectEditorEnemyData = (state: State) => state.editor.enemyData;
