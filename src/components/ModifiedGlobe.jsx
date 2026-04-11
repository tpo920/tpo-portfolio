import React from 'react';
import Globe from 'react-globe.gl';

const ModifiedGlobe = () => {
  const globeMethods = React.useRef(null);

  return (
    <Globe
      ref={globeMethods}
      onGlobeReady={() =>
        globeMethods.current?.pointOfView({
          lng: 174.76,
          lat: -36.8,
          altitude: 1.8,
        })
      }
      height={200}
      width={200}
      backgroundColor="rgba(0, 0, 0, 0)"
      backgroundImageOpacity={0.5}
      showAtmosphere
      showGraticules
      showPointerCursor
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          lat: -36.85,
          lng: 174.76,
          text: 'Auckland, New Zealand',
          color: 'white',
          size: 100,
        },
      ]}
      labelDotRadius={2}
    />
  );
};

export default ModifiedGlobe;
