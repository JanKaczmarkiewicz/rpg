import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectMapBackground, selectMapSize } from '../../stores/map/selectors';
import { Background, BackgroundWrapper } from './styles';

const MapBackground: FunctionComponent = () => {
    const { height, width } = useSelector(selectMapSize);
    const backgroundUrl = useSelector(selectMapBackground);

    return (
        <BackgroundWrapper>
            <Background src={backgroundUrl} height={height} width={width} />
        </BackgroundWrapper>
    );
};

export default MapBackground;
