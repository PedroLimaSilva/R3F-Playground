import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { Box } from './components/box';
import { Room } from './components/Room';
import { PointOfInterest } from './components/PointOfInterest';

import { AvMatoran } from './models/AvMatoran';

const isPreview =
  process.env.NODE_ENV !== 'production' ||
  process.env.REACT_APP_VERCEL_ENV === 'preview';

const POINTS_OF_INTEREST: Array<{
  position: [number, number, number];
  margin: number;
  scale?: number;
  childOf?: number[];
}> = [
  { position: [0, 0, 0], margin: 1.5 },
  { position: [1, -0.25, 1], margin: 1.5, scale:0.5 },
  { position: [-1, 0, -1], margin: 1.5 },
  { position: [1, 1, 0], margin: 1.5 },
  { position: [1, 1, 0], margin: 1.5, scale: 0.5, childOf: [3] },
  { position: [0, 1, -1], margin: 1.5 },
  { position: [0, 1, -1], margin: 1.5, scale: 0.5, childOf: [5] },
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
      {isPreview && <Perf position="top-left" />}

      <OrbitControls
        makeDefault
        maxZoom={500}
        minZoom={75}
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
      <group rotation={[0, Math.PI / 4, 0]}>
        <group scale={2.75}>
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
                scale={poi.scale === undefined ? 1 : poi.scale}
                onClick={() => {
                  if (
                    focusedPOI !== index &&
                    !POINTS_OF_INTEREST[focusedPOI].childOf?.includes(index)
                  ) {
                    focusPOI(index);
                  }
                }}
              />
            </Bounds>
          ))}
        </group>
        <Box />
        <Room scale={2.5} rotation={[0, -Math.PI / 4, 0]} />
        <AvMatoran position={[2.75, -2.75 / 2, 2.75]} rotation={[0, -Math.PI / 4, 0]}/>
      </group>
    </Canvas>
  );
}
