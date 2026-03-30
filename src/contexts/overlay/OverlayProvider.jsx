import { useState } from 'react';
import OverlayContext from './OverlayContext';

// Create provider component
const OverlayProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [overlayClickHandler, setOverlayClickHandler] = useState(null);

  const showOverlay = (callback) => {
    setIsVisible(true);
    setOverlayClickHandler(() => callback);
  };

  const hideOverlay = () => {
    setIsVisible(false);
    setOverlayClickHandler(null);
  };

  return (
    <OverlayContext.Provider
      value={{ showOverlay, hideOverlay, isVisible, overlayClickHandler }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
