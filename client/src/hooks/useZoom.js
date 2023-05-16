import { useState, useEffect } from 'react';

const useZoom = () => {
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const zoom = Math.min(width / 1920, height / 900);
      setZoomLevel(zoom * 100);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.zoom = '100%';
    };
  }, []);

  useEffect(() => {
    document.body.style.zoom = `${zoomLevel}%`;
  }, [zoomLevel]);

  return zoomLevel;
};

export default useZoom;
