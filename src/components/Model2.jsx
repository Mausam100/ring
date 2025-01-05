import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ color, ...props }) {
  const { nodes, materials } = useGLTF("/Zennahgemring.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
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
  );
}

useGLTF.preload("/Zennahgemring.glb");
