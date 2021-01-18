import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useScale } from '../../hooks/useScale';
import {
    selectMapHorizontalSize,
    selectMapOffset,
    selectMapVerticalSize,
    selectTiles,
    selectTileSize,
} from '../../store/map/selectors';
import Tile from '../Tile/Tile';
import { Grid } from './styles';

const MapGrid: FunctionComponent = () => {
    const tileSize = useSelector(selectTileSize);
    const mapHorizontalSize = useSelector(selectMapHorizontalSize);
    const mapVerticalSize = useSelector(selectMapVerticalSize);
    const tiles = useSelector(selectTiles);
    const offset = useSelector(selectMapOffset);
    const scale = useScale();

    return (
        <Grid
            tileSize={tileSize}
            horizontalSize={mapHorizontalSize}
            verticalSize={mapVerticalSize}
            bottomOffset={scale(offset.bottom)}
            topOffset={scale(offset.top)}
            leftOffset={scale(offset.left)}
            rightOffset={scale(offset.right)}
        >
            {tiles.flatMap((row) => row.map((tile) => <Tile key={tile.id} tile={tile} size={tileSize} />))}
        </Grid>
    );
};

export default MapGrid;
