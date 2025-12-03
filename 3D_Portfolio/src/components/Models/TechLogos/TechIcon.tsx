// import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";
// import * as THREE from "three";

// const TechIcon = ({ model }) => {
//   const scene = useGLTF(model.modelPath);

//   useEffect(() => {
//     if (model.name === "Interactive Developer") {
//       scene.scene.traverse((child) => {
//         if (child.isMesh) {
//           if (child.name === "Object_5") {
//             child.material = new THREE.MeshStandardMaterial({ color: "white" });
//           }
//         }
//       });
//     }
//   }, [scene]);
//   return (
//     <Canvas>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <Environment preset="city" />
//       <OrbitControls enableZoom={false} />

//       <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
//         <group scale={model.scale} rotation={model.rotation}>
//           <primitive object={scene.scene} />
//         </group>
//       </Float>
//     </Canvas>
//   );
// };

// export default TechIcon;


import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

// ----------------------
// Types
// ----------------------
interface TechModel {
  name: string;
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
}

interface TechIconProps {
  model: TechModel;
}

interface GLTFResult extends THREE.Object3D {
  scene: THREE.Group;
}

// ----------------------
// Component
// ----------------------
const TechIcon: React.FC<TechIconProps> = ({ model }) => {
  const scene = useGLTF(model.modelPath) as unknown as GLTFResult;

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
              color: "white",
            });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;

// Drei GLTF loader needs this:
useGLTF.preload("/path/to/model.glb");
