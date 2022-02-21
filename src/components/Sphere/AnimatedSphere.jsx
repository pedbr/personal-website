import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'

const AnimatedSphere = () => {

  return (
    <Sphere visible args={[1, 100, 200]} scale={1.7}>
      <OrbitControls enableZoom={false} />
      <MeshDistortMaterial
        color="#1B1E23"
        attach="material"
        distort={0.4}
        speed={1.2}
        roughness={1.2}
      />
    </Sphere>
  );
}

export default AnimatedSphere