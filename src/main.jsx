import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Overlay from './components/Overlay.jsx';
import OverlayProvider from './contexts/overlay/OverlayProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OverlayProvider>
      <App />
      <Overlay />
    </OverlayProvider>
  </StrictMode>
);
