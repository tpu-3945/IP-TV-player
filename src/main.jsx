import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import { SettingsProvider } from './context/SettingsContext.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { PortalProvider } from './context/PortalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/IP-TV-player/">
      <PortalProvider>
        <SettingsProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </SettingsProvider>
      </PortalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
