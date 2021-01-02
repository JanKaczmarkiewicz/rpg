import styled from "@emotion/styled";

export const MapGridContainer = styled.div<{ mapSize: number; tileSize: number }>`
  display: grid;
  grid: ${({ mapSize, tileSize }) =>
    `repeat(${mapSize}, ${tileSize}px) / repeat(${mapSize}, ${tileSize}px);`};
`;
