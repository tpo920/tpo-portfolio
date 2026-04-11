import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Laptop } from './Laptop';
import { useMediaQuery } from 'react-responsive';
import { Suspense } from 'react';

const HeroExperience = ({ ref }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  //const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <Canvas
      camera={{ position: [0, 0, 25], fov: 45 }}
      frameloop="demand"
      ref={ref}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 5}
        maxAzimuthAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <directionalLight position={[5, 0, 0]} intensity={15} color="#1a1a40" />
        <directionalLight
          position={[-5, -1, 2]}
          intensity={10}
          color="#9d4edd"
        />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <directionalLight position={[-5, 0, 0]} intensity={2} />

        <group
          scale={isMobile ? 1 : 1.5}
          position={[-1, -2.7, 3]}
          rotation={[0, -Math.PI / 3.5, -0.25]}
        >
          <Laptop />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
