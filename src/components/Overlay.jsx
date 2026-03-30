import { createPortal } from 'react-dom';
import { useOverlay } from '../hooks/useOverlay.js';

const Overlay = () => {
  const { isVisible, overlayClickHandler } = useOverlay();

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-full bg-white/70 z-10 transition-opacity duration-200 ease-out backdrop-blur-[2px]"
      style={{
        opacity: isVisible ? '1' : '0',
        pointerEvents: isVisible ? '' : 'none',
      }}
      onClick={overlayClickHandler}
    ></div>,
    document.body
  );
};

export default Overlay;
