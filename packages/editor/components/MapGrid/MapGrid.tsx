import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTileContent } from '../../store/map/actions/setTileContent';
import {
    selectEditorEnemyData,
    selectEditorMode,
    selectMapHorizontalSize,
    selectMapVerticalSize,
    selectTiles,
    selectTileSize,
} from '../../store/map/selectors';
import { EditMode, ContentType } from '../../store/map/types';
import Tile, { TileProps } from '../Tile/Tile';
import { Grid } from './styles';

const useTileCommonProps = (): Pick<TileProps, 'onClick' | 'showCollisions' | 'showNpcs' | 'showEnemies'> => {
    const dispatch = useDispatch();
    const editorMode = useSelector(selectEditorMode);
    const enemyData = useSelector(selectEditorEnemyData);

    if (editorMode === EditMode.Wall) {
        return {
            onClick: ({ x, y }) => dispatch(setTileContent({ content: { type: ContentType.Wall }, x, y })),
            showEnemies: true,
            showNpcs: true,
            showCollisions: true,
        };
    }

    if (editorMode === EditMode.Enemy) {
        return {
            onClick: ({ x, y }) => dispatch(setTileContent({ content: enemyData.selected, x, y })),
            showEnemies: true,
            showNpcs: true,
            showCollisions: false,
        };
    }

    if (editorMode === EditMode.Npc) {
        return {
            onClick: ({ x, y }) => dispatch(setTileContent({ content: enemyData.selected, x, y })),
            showEnemies: true,
            showNpcs: true,
            showCollisions: true,
        };
    }

    return {
        onClick: () => {
            //nothing
        },
        showEnemies: true,
        showNpcs: true,
        showCollisions: true,
    };
};

const MapGrid: FunctionComponent = () => {
    const tileSize = useSelector(selectTileSize);
    const mapHorizontalSize = useSelector(selectMapHorizontalSize);
    const mapVerticalSize = useSelector(selectMapVerticalSize);
    const tiles = useSelector(selectTiles);
    const commonTileProps = useTileCommonProps();

    return (
        <Grid tileSize={tileSize} horizontalSize={mapHorizontalSize} verticalSize={mapVerticalSize}>
            {tiles.flatMap((row) =>
                row.map((tile) => <Tile {...commonTileProps} key={tile.id} tile={tile} size={tileSize} />),
            )}
        </Grid>
    );
};

export default MapGrid;
