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
    padding-top: ${({ topOffset }) => topOffset}px;
    padding-bottom: ${({ bottomOffset }) => bottomOffset}px;
    padding-left: ${({ leftOffset }) => leftOffset}px;
    padding-right: ${({ rightOffset }) => rightOffset}px;
`;
