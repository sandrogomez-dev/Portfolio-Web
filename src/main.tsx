import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@/context/ThemeContext';

// Import Bootstrap CSS and custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.scss';

// Hide preloader once React is loaded
const hidePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Hide preloader after a short delay to ensure smooth transition
setTimeout(hidePreloader, 1000); 