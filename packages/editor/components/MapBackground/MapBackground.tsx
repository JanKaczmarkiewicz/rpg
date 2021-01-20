import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useScale } from '../../hooks/useScale';
import { selectMapBackground, selectMapHorizontalSize, selectMapVerticalSize } from '../../store/map/selectors';
import { Background } from './styles';

const MapBackground: FunctionComponent = () => {
    const width = useSelector(selectMapHorizontalSize);
    const height = useSelector(selectMapVerticalSize);
    const backgroundUrl = useSelector(selectMapBackground);
    const scale = useScale();

    return <Background src={backgroundUrl} height={scale(height)} width={scale(width)} />;
};

export default MapBackground;
