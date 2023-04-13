import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { isPreview } from '../environment';

export function Pilar() {
  return (
    <>
      <Canvas
        flat
        orthographic
        camera={{
          fov: 45,
          near: 0.01,
          far: 200,
          zoom: 100,
          position: [0, 20, 100],
        }}
      >
        {isPreview && <Perf position="top-left" />}

        <OrbitControls
          makeDefault
          maxZoom={2250}
          minZoom={isPreview ? 0 : 150}
          // maxDistance={1}
          // minDistance={1}
          enablePan={isPreview}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />

        <ambientLight intensity={0.5} />
        <pointLight
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          intensity={0.8}
          position={[100, 100, 100]}
        />
        <group rotation={[0, Math.PI / 4, 0]}></group>
      </Canvas>
    </>
  );
}
