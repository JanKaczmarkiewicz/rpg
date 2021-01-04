import { CSSProperties } from 'react';
import styled from '@emotion/styled';

export const Background = styled.img<{ height: CSSProperties['height']; width: CSSProperties['width'] }>`
    position: absolute;
    height: ${({ height }) => height}px;
    width: ${({ width }) => width}px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
