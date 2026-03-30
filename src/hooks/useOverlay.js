import { useContext } from 'react';
import OverlayContext from '../contexts/overlay/OverlayContext';

// Create a custom hook to use the context
export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
