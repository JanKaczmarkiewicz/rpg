import { makeStyles } from '@material-ui/core';
import { ContentKind } from '@rpg/backend/src/constants/constants';
import { useFormik } from 'formik';
import React, { FunctionComponent, memo, useEffect, useMemo, useState } from 'react';
import { Background } from '../MapBackground/styles';
import { Grid } from '../MapGrid/styles';
import { TileTooltip, TileWrapper } from '../Tile/styles';

function useImageDimensions(url: string) {
    const [imageDimension, setImageDimension] = useState<{ width: number; height: number } | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const img = useMemo(() => new Image(), []);

    useEffect(() => {
        img.src = url;

        img.addEventListener('load', function () {
            setImageDimension({ width: this.naturalWidth, height: this.naturalHeight });
            setIsLoading(false);
        });
        img.addEventListener('error', () => {
            setIsLoading(false);
        });
    }, [url]);

    return { dimensions: imageDimension || { width: 0, height: 0 }, isLoading };
}

const useImageWrapperStyles = makeStyles(() => ({
    root: {
        width: '100%',
        overflow: 'scroll',
        margin: 0,
        position: 'relative',
        maxHeight: '400px',
    },
}));

const PREVIEW_TILE_SIZE = 32; // base 2 value

const generateMapEmptyTiles = (x: number, y: number) =>
    Array(x)
        .fill(null)
        .map((_, i) =>
            Array(y)
                .fill(null)
                .map((__, j) => ({ kind: ContentKind.Empty })),
        );

const MapPreview: FunctionComponent<{
    url: string;
    name: string;
    onChange: ReturnType<typeof useFormik>['handleChange'];
}> = memo(({ url, name, onChange }) => {
    const {
        isLoading,
        dimensions: { width, height },
    } = useImageDimensions(url);

    const imageWrapperClasses = useImageWrapperStyles();

    const mapHorizontalSize = width / PREVIEW_TILE_SIZE;
    const mapVerticalSize = height / PREVIEW_TILE_SIZE;

    const mapTiles = generateMapEmptyTiles(mapHorizontalSize, mapVerticalSize);

    useEffect(() => {
        if (!url || isLoading) return;
        onChange({ target: { name, value: mapTiles } });
    }, [mapHorizontalSize, mapVerticalSize]);

    if (!url || isLoading) {
        return null;
    }

    return (
        <figure className={imageWrapperClasses.root}>
            <Grid tileSize={PREVIEW_TILE_SIZE} horizontalSize={mapHorizontalSize} verticalSize={mapVerticalSize}>
                {mapTiles.flat().map((_, i) => (
                    <TileWrapper key={i}>
                        <TileTooltip />
                    </TileWrapper>
                ))}
            </Grid>

            <Background width={width} height={height} src={url} alt="map-preview" />
        </figure>
    );
});

export default MapPreview;
