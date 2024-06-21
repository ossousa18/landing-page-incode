'use client';

import styled from 'styled-components';

export const StyledContainerLine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type LineProps = {
  background: 'green' | 'blue' | 'purple';
  color: 'green' | 'blue' | 'purple';
  border: 'green' | 'blue' | 'purple';
};

export const StyledLine = styled.div<LineProps>`
  width: 100%;
  height: 2px;
  ${({ background, theme }) => {
    if (background === 'green') {
      return `background-color: ${theme.colors.green_1};`;
    }
    if (background === 'blue') {
      return `background-color: ${theme.colors.blue_2};`;
    }
    if (background === 'purple') {
      return `background-color: ${theme.colors.purple_1};`;
    }
  }}
  margin-top: 5rem;
  z-index: 1;
  opacity: 0.6;
`;

export const StyledCircul = styled.div<LineProps>`
  width: 72px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: -40px;
  ${({ border, theme }) => {
    if (border === 'green') {
      return `border: 3px solid ${theme.colors.green_1};`;
    }
    if (border === 'blue') {
      return `border: 3px solid ${theme.colors.blue_2};`;
    }
    if (border === 'purple') {
      return `border: 3px solid ${theme.colors.purple_1};`;
    }
  }};
`;

export const StyledInfosMod = styled.div<LineProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 850px;

  h1 {
    font-weight: 600;
    ${({ color, theme }) => {
      if (color === 'green') {
        return `color: ${theme.colors.green_1};`;
      }
      if (color === 'blue') {
        return `color: ${theme.colors.blue_2};`;
      }
      if (color === 'purple') {
        return `color: ${theme.colors.purple_1};`;
      }
    }}
    font-size: 24px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white_1};
    font-size: 38px;
    margin-top: 1px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.colors.white_1};
    opacity: 0.5;
    font-weight: 300;
    font-size: 16px;
    text-align: center;
    margin-top: 2rem;
  }
`;
