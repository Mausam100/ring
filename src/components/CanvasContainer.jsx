import { Canvas } from "@react-three/fiber";
import Model1 from "./Model1";
import Model2 from "./Model2";
import { Suspense } from "react";

import {
  OrbitControls,
  Environment,
} from "@react-three/drei";

const CanvasContainer = ({ model, color }) => {
  return (
    <div className="sm:w-1/2 w-full h-[80vh] sm:h-full">
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: window.innerWidth > 768 ? 60 : 90 // Adjusts FOV based on device width
        }}
        shadows
      >
        {/* Global Ambient Light */}
        <ambientLight intensity={0.4} />

        {/* Spotlights for highlights */}
        <spotLight
          position={[5, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <spotLight
          position={[-5, 10, -10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />

        {/* Fill Light for softer shadows */}
        <directionalLight
          position={[0, 5, 5]}
          intensity={1}
          castShadow
        />

        {/* Environment for realistic reflections */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          <group>
            {model === "Model1" ? (
              <Model1 scale={1} position={[0, 2, 0]} color={color} />
            ) : (
              <Model2 scale={2} position={[0, 0, 0]} color={color} />
            )}
            <OrbitControls enableZoom={true} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
