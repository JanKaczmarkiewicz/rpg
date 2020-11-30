import React, { CSSProperties, FunctionComponent } from 'react';
import mapGenerator from '../mapGenerator';

const map = mapGenerator();

const mapContainerStyle: CSSProperties = {
  display: 'grid',
  grid: `repeat(${map.config.MAP_SIZE}, ${map.config.TILE_SIZE}) / repeat(${map.config.MAP_SIZE}, ${map.config.TILE_SIZE})`,
};

const EditedMap: FunctionComponent = () => (
  <div style={mapContainerStyle}>
    {

}
  </div>
);

export default EditedMap;
