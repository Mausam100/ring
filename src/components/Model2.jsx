import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three-stdlib";
import { MeshRefractionMaterial } from "@react-three/drei";

const Model = ({ metalType, ...props }) => {
  const { nodes, materials } = useGLTF("/ring4.glb");

  // Load HDR environment map for reflections
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  // Define material properties for different metals
  const getMaterialProperties = (type) => {
    switch (type) {
      case "gold":
        return {
          color: "#FFD700",
          metalness: 0.8,
          roughness: 0.2,
          reflectivity: 0.001,
          clearcoat: 0.5,
          clearcoatRoughness: 0.1,
          ior: 1, 
          transmission: 0,
        };
      case "roseGold":
        return {
          color: "#B76E79",
          metalness: 0.7,
          roughness: 0.2,
          reflectivity: 0.01,
          clearcoat: 0.5,
          clearcoatRoughness: 1,
          ior: 0.01, 
          transmission: 0,
        };
      case "oxidizedSilver":
        return {
          color: "#a09f9b", 
          metalness: 0.8, 
          roughness: 0.4, 
          reflectivity: 0.5, 
          clearcoat: 0.2, 
          clearcoatRoughness: 0.7, 
          transmission: 0,
        };
      case "brushedTitanium":
        return {
          color: "#878681", 
          metalness: 1, 
          roughness: 0.4, 
          reflectivity: 0.4, 
          clearcoat: 0.3, 
          clearcoatRoughness: 0.6, 
          ior: 1.4, 
          transmission: 0,
        };
      default:
        return {
          color: "#FFDF00",
          metalness: 1,
          roughness: 0.1,
          reflectivity: 0.01,
          clearcoat: 0.5,
          clearcoatRoughness: 0.1,
          ior: 1, // gold-like reflection
          transmission: 0,
        };
    }
  };

  const materialProps = getMaterialProperties(metalType);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.017}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object_1_Material_#34_0"].geometry}
            position={[-1.439, 58.824, -24.6]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={23.716}
          >
            <MeshRefractionMaterial
              envMap={texture}
              color={"#ffffff"}
              roughness={materialProps.roughness}
              metalness={materialProps.metalness}
              transmission={1}
              ior={2.42}
              toneMapped={false}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Group57578_Retopo_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[-1.44, -11.721, -24.603]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={4.989}
          >
            <meshPhysicalMaterial
              color={materialProps.color}
              metalness={materialProps.metalness}
              roughness={materialProps.roughness}
              reflectivity={materialProps.reflectivity}
              clearcoat={materialProps.clearcoat}
              clearcoatRoughness={materialProps.clearcoatRoughness}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Object_24_Material_#34_0"].geometry}
            material={materials.Material_34}
            position={[-1.286, -12.737, -60.1]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[5.481, 4.983, 5.481]}
          >
            <MeshRefractionMaterial
              envMap={texture}
              color={"#ffffff"}
              roughness={materialProps.roughness}
              metalness={materialProps.metalness}
              transmission={1}
              ior={2.42}
              toneMapped={false}
            />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Group38558_Retopo_Material_#33_0"].geometry}
            material={materials.Material_33}
            position={[-1.286, -69.838, -36.773]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[1.083, 0.984, 1.083]}
          >
            <meshPhysicalMaterial
              color={materialProps.color}
              metalness={materialProps.metalness}
              roughness={materialProps.roughness}
              reflectivity={materialProps.reflectivity}
              clearcoat={materialProps.clearcoat}
              clearcoatRoughness={materialProps.clearcoatRoughness}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/ring4.glb");

export default Model;
