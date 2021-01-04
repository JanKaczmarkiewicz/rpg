import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useScale } from '../../hooks/useScale';
import { selectMapBackground, selectMapHeight, selectMapWidth } from '../../stores/map/selectors';
import { Background } from './styles';

const MapBackground: FunctionComponent = () => {
    const height = useSelector(selectMapHeight);
    const width = useSelector(selectMapWidth);
    const backgroundUrl = useSelector(selectMapBackground);
    const scale = useScale();

    return <Background src={backgroundUrl} height={scale(height)} width={scale(width)} />;
};

export default MapBackground;
