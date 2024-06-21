'use client';

import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${({ theme }) => theme.colors.body};
    color: white;
    
  }
`;
