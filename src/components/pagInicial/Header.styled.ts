'use client';

import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid;
  border-color: #13161a;
  gap: 25rem;
`;
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white_1};
  text-decoration: none;
  font-size: 12px;
  opacity: 0.7;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    div {
      width: 100%;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.blue_1};
      border-radius: 5px 5px 0 0;
      position: absolute;
      bottom: 0;
    }

    /* padding: 31px 0px ;
    border-bottom: 3px solid ${({ theme }) => theme.colors.blue_1}; */
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
`;

export const StyledButton = styled.button`
  width: ${(prop) => prop.width};
  height: ${(prop) => prop.height};
  padding: 9px 18px 8px 18px;
  gap: 6px;
  background-color: ${({ theme }) => theme.colors.blue_1};
  border: none;
  border-radius: 30px;
  font-size: ${(prop) => prop.fontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
`;
