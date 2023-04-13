import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { isPreview } from '../environment';
import { ReadyPlayerMe } from '../models/ReadyPlayerMe';

export function Character() {
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
          maxZoom={1000}
          minZoom={150}
          // maxDistance={1}
          // minDistance={1}
          enablePan
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          maxAzimuthAngle={0}
          minAzimuthAngle={0}
        />

        <ambientLight intensity={0.5} />
        <pointLight
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          intensity={0.8}
          position={[100, 100, 100]}
        />

        <Bounds fit clip observe margin={1.5}>
          <ReadyPlayerMe />
        </Bounds>
      </Canvas>
    </>
  );
}
