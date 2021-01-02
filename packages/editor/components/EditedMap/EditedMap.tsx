import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import {
  selectMapSize,
  selectTiles,
  selectTileSize,
} from "../../stores/map/selectors";
import Tile from "../Tile/Tile";
import { MapGridContainer } from "./styles";

const EditedMap: FunctionComponent = () => {
  const tileSize = useSelector(selectTileSize);
  const mapSize = useSelector(selectMapSize);
  const tiles = useSelector(selectTiles);

  return (
    <MapGridContainer tileSize={tileSize} mapSize={mapSize}>
      {tiles.flatMap((row, i) =>
        row.map((tile, j) => (
          <Tile key={`${i}-${j}`} tile={tile} size={tileSize} />
        ))
      )}
    </MapGridContainer>
  );
};

export default EditedMap;
