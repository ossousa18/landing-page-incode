'use client';

import styled from 'styled-components';

export const StyledCardMod = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  gap: 1rem;
`;

export const StyledTextMod = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    opacity: 0.8;
    font-size: 16px;
  }
`;

type CuboModProps = {
  background: 'green' | 'blue' | 'purple';
};

export const StyledCuboMod = styled.div<CuboModProps>`
  width: 55px;
  height: 60px;
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
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white_1};
  }
`;
