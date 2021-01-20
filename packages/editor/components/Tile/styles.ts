import styled from '@emotion/styled';

export const TileSprite = styled.img<{ size: number }>`
    width: ${({ size }) => size}px;
    position: absolute;
    bottom: 0;
`;

const BORDER_SIZE = 1;
export const TileTooltip = styled.div`
    height: 100%;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.tileTooltip};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;

    &:hover {
        height: calc(100% - ${BORDER_SIZE * 2}px);
        width: calc(100% - ${BORDER_SIZE * 2}px);
        border: ${BORDER_SIZE}px solid white;
    }
`;

export const TileWrapper = styled.div`
    position: relative;
`;
