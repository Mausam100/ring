import { Canvas } from "@react-three/fiber";
import Model from "./Model2";
import { Suspense } from "react";
import { OrbitControls, Environment} from "@react-three/drei";

const CanvasContainer = ({ metalType }) => {
  return (
    <div className="w-full h-[80vh] sm:h-full">
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: window.innerWidth > 768 ? 60 : 90, // Adjusts FOV based on device width
        }}
        shadows
      >
        {/* General ambient light */}
        

        {/* Soft main directional light */}
        <spotLight 
          position={[5, 5, 2]} 
          angle={0.15} 
          penumbra={0.5} 
          intensity={0.8} 
          color={"#FFFFFF"} 
          castShadow
        />

        {/* Fill light to soften shadows */}
        <pointLight 
          position={[-5, -5, -2]} 
          intensity={0.5} 
          color={"#FFFFFF"} 
        />

        {/* Additional Hemisphere light for a softer, uniform fill */}
        <hemisphereLight 
          skyColor={0xffffff} // Light blue sky
          groundColor={0x555555} // Dark gray ground
          intensity={0.1} 
        />

        {/* Environment for realistic reflections */}
        <Environment files="/studio.hdr" />

        <Suspense fallback={null}>
          <group>
            <Model scale={2} position={[0, 0, 0]} metalType={metalType} />
            <OrbitControls enableZoom={false} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
