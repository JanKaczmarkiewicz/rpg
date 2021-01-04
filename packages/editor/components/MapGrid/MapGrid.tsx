import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import {
    selectMapHorizontalSize,
    selectMapOffset,
    selectMapVerticalSize,
    selectTiles,
    selectTileSize,
} from '../../stores/map/selectors';
import Tile from '../Tile/Tile';
import { Grid } from './styles';

const MapGrid: FunctionComponent = () => {
    const tileSize = useSelector(selectTileSize);
    const mapHorizontalSize = useSelector(selectMapHorizontalSize);
    const mapVerticalSize = useSelector(selectMapVerticalSize);
    const tiles = useSelector(selectTiles);
    const offset = useSelector(selectMapOffset);

    return (
        <Grid
            tileSize={tileSize}
            horizontalSize={mapHorizontalSize}
            verticalSize={mapVerticalSize}
            bottomOffset={offset.bottom}
            topOffset={offset.top}
            leftOffset={offset.left}
            rightOffset={offset.right}
        >
            {tiles.flatMap((row) => row.map((tile) => <Tile key={tile.id} tile={tile} size={tileSize} />))}
        </Grid>
    );
};

export default MapGrid;
