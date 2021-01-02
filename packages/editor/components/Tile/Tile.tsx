import React, { FunctionComponent } from "react";
import { loadImage } from "../../helpers/loadImage";
import { Tile as TileData } from "../mapGenerator";
import { TileSprite, TileWrapper } from "./styles";

const Tile: FunctionComponent<{ tile: TileData; size: number }> = ({
  tile,
  size,
}) => (
  <TileWrapper>
    {tile.content && (
      <TileSprite
        src={loadImage(tile.content.sprite)}
        alt={tile.content.sprite}
        size={size}
      />
    )}
  </TileWrapper>
);

export default Tile;
