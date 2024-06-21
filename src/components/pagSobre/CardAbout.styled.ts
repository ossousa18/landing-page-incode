'use client';

import styled from 'styled-components';

export const StyledContainerCard = styled.div`
  width: 500px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.white_1};
    font-size: 32px;
    font-weight: 700;
  }
  p {
    color: ${({ theme }) => theme.colors.white_1};
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    opacity: 0.6;
    height: 160px;
    width: 100%;
  }
`;

export const StyleImageCard = styled.div`
  width: 74px;
  height: 74px;
  border: 2px solid;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.blue_1};
`;
