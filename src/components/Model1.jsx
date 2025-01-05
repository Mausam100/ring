import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model1({ color, ...props }) {
  const { nodes, materials } = useGLTF('/ring1.glb');


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Crystal remains the same */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Crystal}
        />
        {/* Apply gold or rose gold material */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Metal}
        >
           <meshPhysicalMaterial
            color={color || "#FFD700"} // Gold color
            metalness={1}
            roughness={0.1} // Polished surface
            reflectivity={0.9} // High reflectivity for metallic look
            clearcoat={0.5} // Adds a layer of shine
            clearcoatRoughness={0.1} // Keeps clearcoat polished
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/ring1.glb');
