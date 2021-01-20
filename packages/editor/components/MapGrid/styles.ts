import styled from '@emotion/styled';

export const Grid = styled.div<{
    tileSize: number;
    horizontalSize: number;
    verticalSize: number;
}>`
    display: grid;
    grid: ${({ horizontalSize, verticalSize, tileSize }) =>
        `repeat(${verticalSize}, ${tileSize}px) / repeat(${horizontalSize}, ${tileSize}px);`};
`;
