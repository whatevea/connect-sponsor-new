'use client';

import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#191153',
    },
    secondary: {
      main: '#E9901A',
    },
    background: {
      default: '#191153',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFA51F',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: `'Gilroy', sans-serif`,

    h1: {
      fontSize: '54px',
      fontWeight: 800,
      lineHeight: '64px',
    },
    h2: {
      fontSize: '40.99px',
      fontWeight: 900,
      lineHeight: '40.99px',
    },
    h3: {
      fontSize: '37px',
      fontWeight: 800,
      lineHeight: '26px',
    },
    h4: {
      fontSize: '28px',
      fontWeight: 800,
      lineHeight: '29px',
    },
    h5: {
      fontSize: '23px',
      fontWeight: 800,
      lineHeight: '31.19px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '43px',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '28px',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '20px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '16px',
    },
    body2: {
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '12px',
    },
  },
  
  components: {
    MuiButton: {
      variants: [
        {
          // Yellow button variant
          props: { variant: 'contained', color: 'primary' },
          style: {
            fontSize: '1.125rem',
            lineHeight: '1.1875rem',
            fontWeight: 400,
            textTransform: 'none',
            padding: '8px 16px',
            minHeight: '44px',
            borderRadius: '50px',
            backgroundColor: '#E9901A',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#E9901A',
            },
          },
        },
        {
          // Green button variant
          props: { variant: 'contained', color: 'secondary' },
          style: {
            fontSize: '1.125rem',
            lineHeight: '1.1875rem',
            fontWeight: 400,
            textTransform: 'none',
            padding: '8px 16px',
            minHeight: '44px',
            borderRadius: '50px',
            backgroundColor: '#0E9E59',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0E9E59',
            },
          },
        },
        {
          // Outlined button variant
          props: { variant: 'outlined' },
          style: {
            fontSize: '1.125rem',
            lineHeight: '1.1875rem',
            fontWeight: 400,
            textTransform: 'none',
            padding: '8px 16px',
            minHeight: '44px',
            borderRadius: '50px',
            border: '1px solid #FFFFFF',
            color: '#FFFFFF',
            backgroundColor: 'transparent',
          },
        },
      ],
    },

    
  },
});
