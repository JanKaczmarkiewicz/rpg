import React, { CSSProperties, FunctionComponent } from 'react';
import mapGenerator from '../mapGenerator';

const map = mapGenerator();

const mapContainerStyle: CSSProperties = {
  display: 'grid',
  grid: `repeat(${map.config.MAP_SIZE}, ${map.config.TILE_SIZE}px) / repeat(${map.config.MAP_SIZE}, ${map.config.TILE_SIZE}px)`,
};

const loadImage = (relPath:string) => `/assets/sprites/${relPath}.svg`;

// eslint-disable-next-line react/no-array-index-key
const tiles = map.tiles.flatMap((row, i) => row.map((tile, j) => (
  // eslint-disable-next-line react/no-array-index-key
  <div key={`${i}-${j}`} style={{ backgroundImage: `url("${loadImage(tile.sprite)}")` }}>
    {tile.content && <img src={loadImage(tile.content.sprite)} alt={tile.content.sprite} style={{ width: `${map.config.TILE_SIZE}px` }} />}
  </div>
)));

const EditedMap: FunctionComponent = () => (
  <div style={mapContainerStyle}>
    {tiles}
  </div>
);

export default EditedMap;
