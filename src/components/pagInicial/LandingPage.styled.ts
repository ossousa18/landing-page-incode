'use client';

import styled from 'styled-components';

export const StyledContainerInfo = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const StyledInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    width: 700px;
    text-align: center;
    font-size: 47px;
    margin-top: 5rem;
    font-weight: 600;
    color: white;
  }

  p {
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    width: 450px;
    opacity: 0.8;
    margin-bottom: 20px;
  }
`;

export const StyledContainerImgLeft = styled.div`
  display: flex;
  position: absolute;
  left: -10px;
`;
export const StyledContainerImgRight = styled.div`
  display: flex;
  position: absolute;
  right: -10px;
`;

export const StyledContainerOxy = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3.5rem;

  h2 {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
`;
