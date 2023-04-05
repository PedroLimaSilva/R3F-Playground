import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Float, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { Box } from './components/box';
import { Room } from './components/Room';
import { PointOfInterest } from './components/PointOfInterest';

const POINTS_OF_INTEREST: Array<{
  position: [number, number, number];
  margin: number;
}> = [
  { position: [0, 0, 0], margin: 1.5 },
  { position: [1, 0, 1], margin: 1.5 },
  { position: [-1, 0, -1], margin: 1.5 },
  { position: [1, 1, 0], margin: 1.5 },
  { position: [0, 1, -1], margin: 1.5 },
  { position: [-1, -1, 0], margin: 1.5 },
  { position: [0, -1, 1], margin: 1.5 },
];

export function Experience() {
  const [focusedPOI, focusPOI] = useState(0);

  return (
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
      {process.env.environment !== 'VERCEL' && <Perf position="top-left" />}

      <OrbitControls
        makeDefault
        maxZoom={200}
        minZoom={75}
        // maxDistance={1}
        // minDistance={1}
        enablePan={false}
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

      <group rotation={[0, Math.PI / 4, 0]} scale={2.75}>
        {POINTS_OF_INTEREST.map((poi, index) => (
          <Bounds
            fit={focusedPOI === index}
            key={`POI:${index}`}
            clip
            observe
            margin={poi.margin}
          >
            <PointOfInterest
              position={poi.position}
              onClick={() => focusPOI(index)}
            />
          </Bounds>
        ))}
      </group>

      <Box />
      <Room />
    </Canvas>
  );
}
