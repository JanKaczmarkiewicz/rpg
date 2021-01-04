import styled from '@emotion/styled';

export const Grid = styled.div<{
    tileSize: number;
    horizontalSize: number;
    verticalSize: number;
    topOffset: number;
    bottomOffset: number;
    leftOffset: number;
    rightOffset: number;
}>`
    display: grid;
    grid: ${({ horizontalSize, verticalSize, tileSize }) =>
        `repeat(${verticalSize}, ${tileSize}px) / repeat(${horizontalSize}, ${tileSize}px);`};
    position: absolute;
    top: ${({ topOffset }) => topOffset}px;
    bottom: ${({ bottomOffset }) => bottomOffset}px;
    left: ${({ leftOffset }) => leftOffset}px;
    right: ${({ rightOffset }) => rightOffset}px;
`;
