import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentKind } from '@rpg/backend/src/constants/constants';
import { setTileContent, SetTileContentPayload } from '../../store/map/actions/setTileContent';
import {
    selectEditorEnemyData,
    selectEditorMode,
    selectMapHorizontalSize,
    selectMapVerticalSize,
    selectTiles,
    selectTileSize,
} from '../../store/map/selectors';
import { EditMode } from '../../store/map/types';
import Tile, { TileProps } from '../Tile/Tile';
import { Grid } from './styles';

type GetTileProps = (cords: { x: number; y: number }) => Pick<TileProps, 'showCollision' | 'onClick'>;

const useTileProps = (): GetTileProps => {
    const dispatch = useDispatch();
    const editorMode = useSelector(selectEditorMode);
    const { selected: selectedEnemy } = useSelector(selectEditorEnemyData);

    const updateTile = (payload: SetTileContentPayload) => dispatch(setTileContent(payload));

    return ({ x, y }) => {
        switch (editorMode) {
            case EditMode.Wall:
                return {
                    onClick: () => updateTile({ content: { kind: ContentKind.Wall }, x, y }),
                    showCollision: true,
                };

            case EditMode.Enemy:
                return {
                    onClick: () =>
                        selectedEnemy &&
                        updateTile({ content: { kind: ContentKind.Enemy, enemy: selectedEnemy }, x, y }),
                    showCollision: false,
                };

            case EditMode.Npc:
                return {
                    onClick: () => updateTile({ content: { kind: ContentKind.Npc }, x, y }),
                    showCollision: true,
                };

            default:
                return {
                    onClick: () => updateTile({ content: { kind: ContentKind.Empty }, x, y }),
                    showCollision: true,
                };
        }
    };
};

const MapGrid: FunctionComponent = () => {
    const tileSize = useSelector(selectTileSize);
    const mapHorizontalSize = useSelector(selectMapHorizontalSize);
    const mapVerticalSize = useSelector(selectMapVerticalSize);
    const tiles = useSelector(selectTiles);
    const getTileProps = useTileProps();

    return (
        <Grid tileSize={tileSize} horizontalSize={mapHorizontalSize} verticalSize={mapVerticalSize}>
            {tiles.flatMap((row, i) =>
                row.map((tile, j) => (
                    <Tile
                        {...getTileProps({ x: j, y: i })}
                        key={`${i}-${j}`}
                        tile={tile}
                        size={tileSize}
                        showEnemy
                        showNpc
                    />
                )),
            )}
        </Grid>
    );
};

export default MapGrid;
