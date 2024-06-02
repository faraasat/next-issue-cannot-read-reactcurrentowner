"use client";

import { AvatarModel } from "./Avatar";

import { ContactShadows, Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <Environment preset="sunset" />
      <directionalLight intensity={0.5} />
      <group position-y={-0.95} position-x={0.1}>
        <AvatarModel selectAnimation={2} />
      </group>
      <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </>
  );
};

export default Scene;
