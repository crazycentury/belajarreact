import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const primaryColor = process.env.REACT_APP_COLOR_PRIMARY;

const theme = createTheme({
  typography: {
    fontFamily: ['Comic Neue','cursive'].join(','),
    h3: {
      fontFamily: ['Oswald', 'sans-serif'].join(','),
    },
    dancing: {
      fontFamily: ['Dancing Script', 'cursive'].join(','),
    }
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  palette: {
    primary: {
      main: process.env.REACT_APP_COLOR_PRIMARY
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
