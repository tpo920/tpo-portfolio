import { useGLTF } from '@react-three/drei';

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/laptop.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.laptop.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.laptop001.geometry}
        material={materials['palette.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.laptop002.geometry}
        material={materials['palette.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/laptop.glb');
