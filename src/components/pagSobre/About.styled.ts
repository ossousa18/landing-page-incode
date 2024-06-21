'use client';

import styled from 'styled-components';

export const StyledContainerAbout = styled.div`
  width: 100%;
  height: 100%;
  font-size: Manrope;
  padding: 100px;
`;

export const StyledTextAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 38px;
    font-weight: 700;
  }

  h2 {
    font-size: 14px;
    text-align: center;
    width: 930px;
    font-weight: 300;
    opacity: 0.6;
    margin-top: 2rem;
  }
`;

export const StyledContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 4rem;
`;
