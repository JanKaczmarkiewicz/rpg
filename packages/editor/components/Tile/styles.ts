import styled from "@emotion/styled";

export const TileSprite = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  position: absolute;
  bottom: 0;
`;

export const TileWrapper = styled.div`
  position: relative;
`;
