import { forwardRef, useState } from 'react';
import { useEffect } from 'react';
import { useOverlay } from '../hooks/useOverlay';

const ZoomableImage = forwardRef(({ ...attributes }, imageRef) => {
  const { showOverlay, hideOverlay } = useOverlay();
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [transform, setTransform] = useState({
    left: 0,
    top: 0,
    scale: 1,
  });

  const [zIndexValue, setZIndexValue] = useState(0);

  function zoomOut() {
    setTransform({
      left: 0,
      top: 0,
      scale: 1,
    });
    hideOverlay();
    setIsZoomedIn(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', zoomOut);

    return () => {
      window.removeEventListener('scroll', zoomOut);
    };
  }, []);

  function toggleZoom() {
    if (isZoomedIn) {
      zoomOut();
      return;
    }
    const rect = imageRef.current.getBoundingClientRect();

    const targetWidth = Math.min(
      window.innerWidth,
      imageRef.current.naturalWidth
    );

    const targetHeight = Math.min(
      window.innerHeight,
      imageRef.current.naturalHeight
    );

    const scaleX = targetWidth / imageRef.current.clientWidth;
    const scaleY = targetHeight / imageRef.current.clientHeight;
    const scale = Math.min(scaleX, scaleY);
    const newWidth = imageRef.current.clientWidth * scale;
    const newHeight = imageRef.current.clientHeight * scale;

    setTransform({
      left: -rect.left + window.innerWidth / 2 - newWidth / 2,
      top: -rect.top + window.innerHeight / 2 - newHeight / 2,
      scale,
    });

    setZIndexValue(100);
    setIsZoomedIn(true);
    showOverlay(zoomOut);
  }

  return (
    <img
      ref={imageRef}
      {...attributes}
      onClick={toggleZoom}
      style={{
        transition: '0.2s ease-out transform',
        transformOrigin: 'left top',
        cursor: isZoomedIn ? 'zoom-out' : 'zoom-in',
        transform: `translate(${transform.left}px, ${transform.top}px) scale(${transform.scale})`,
        position: 'relative',
        zIndex: zIndexValue,
      }}
      onTransitionEnd={() => {
        if (!isZoomedIn) {
          setZIndexValue(0);
        }
      }}
    />
  );
});

export default ZoomableImage;
