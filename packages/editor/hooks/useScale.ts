import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectTileSize } from '../store/map/selectors';

export const useScale = () => {
    const tileSize = useSelector(selectTileSize);
    return useCallback((value: number): number => tileSize * value, [tileSize]);
};
