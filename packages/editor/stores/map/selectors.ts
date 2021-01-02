import { State } from "./types";

export const selectTileSize = (state: State) => state.map.config.TILE_SIZE;
export const selectMapSize = (state: State) => state.map.config.MAP_SIZE;
export const selectTiles = (state: State) => state.map.tiles;
