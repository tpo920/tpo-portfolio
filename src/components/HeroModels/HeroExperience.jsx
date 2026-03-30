import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HeroExperience = () => {
  //const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <Canvas camera={{ position: [0, 0, 40], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
};

export default HeroExperience;
