import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
    <CurrencyProvider> {/* ✅ Wrap App */}
      <App />
    </CurrencyProvider>
    </ThemeProvider>
  </BrowserRouter>
);