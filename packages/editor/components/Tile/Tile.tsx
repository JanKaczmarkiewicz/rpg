import React, { FunctionComponent } from "react";
import { loadImage } from "../../helpers/loadImage";
import { State } from "../../stores/map/types";
import { TileSprite, TileWrapper } from "./styles";

const Tile: FunctionComponent<{
  tile: State["map"]["tiles"][0][0];
  size: number;
}> = ({ tile, size }) => (
  <TileWrapper>
    {tile.isMoveable && (
      <TileSprite src={loadImage("wall")} alt="wall" size={size} />
    )}
  </TileWrapper>
);

export default Tile;