import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTileCollision } from '../../store/map/actions/setTileCollision';
import { selectMapHorizontalSize, selectMapVerticalSize, selectTiles, selectTileSize } from '../../store/map/selectors';
import Tile, { TileProps } from '../Tile/Tile';
import { Grid } from './styles';

const MapGrid: FunctionComponent = () => {
    const dispatch = useDispatch();

    const tileSize = useSelector(selectTileSize);
    const mapHorizontalSize = useSelector(selectMapHorizontalSize);
    const mapVerticalSize = useSelector(selectMapVerticalSize);
    const tiles = useSelector(selectTiles);

    const onTileClick: TileProps['onClick'] = ({ x, y }) => {
        dispatch(setTileCollision({ collision: true, x, y }));
    };

    return (
        <Grid tileSize={tileSize} horizontalSize={mapHorizontalSize} verticalSize={mapVerticalSize}>
            {tiles.flatMap((row) =>
                row.map((tile) => <Tile key={tile.id} tile={tile} size={tileSize} onClick={onTileClick} />),
            )}
        </Grid>
    );
};

export default MapGrid;
