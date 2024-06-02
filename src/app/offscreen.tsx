"use client";

import { FC, Suspense, lazy } from "react";
import { Canvas } from "@react-three/offscreen";

const Scene = lazy(() => import("./scene"));

const Offscreen: FC<{ Loader?: JSX.Element }> = ({ Loader }) => {
  const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
    type: "module",
  });

  return (
    <div className="absolute w-full h-auto aspect-[24/25]">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Canvas
          worker={worker}
          fallback={<Scene />}
          shadows="basic"
          camera={{
            position: [0, -2, 4.5],
            fov: 30,
            castShadow: true,
            zoom: 1.1,
          }}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default Offscreen;
