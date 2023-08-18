import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { PointOfInterest } from '../components/PointOfInterest';

import { AvMatoran } from '../models/AvMatoran';
import { LivingRoom } from '../models/LivingRoom';
import { Background } from '../models/Background';
import { isPreview } from '../environment';
import { Hogwarts } from '../models/Hogwarts';
import { MainCharacter } from '../models/MainCharacter';

const POINTS_OF_INTEREST: Array<{
  externalGeometry?: boolean;
  position: [number, number, number];
  margin: number;
  scale?: number;
  childOf?: number[];
  model?: JSX.Element;
}> = [
  {
    position: [0, 0, 0],
    margin: 1.5,
    model: <MainCharacter position={[0, -0.5, 0]} />,
  },
  { position: [1, -0.25, 1], margin: 1.5, scale: 0.5 },
  { position: [-1, 0, -1], margin: 1.5 },
  {
    position: [1, 1, 0],
    margin: 0.5,
    model: <Hogwarts position={[1, 0.5, 0]} />,
  },
  {
    position: [0, 1, -1],
    margin: 1.5,
    model: <LivingRoom position={[0, 0.5, -1]} />,
  },
  {
    externalGeometry: false,
    position: [0, 1, -1],
    margin: 1.5,
    scale: 0.5,
    model: (
      <AvMatoran
        position={[1, -0.5, 1]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.5}
      />
    ),
  },
  { position: [-1, -1, 0], margin: 1.5 },
  { position: [0, -1, 1], margin: 1.5 },
];

export function CubesStairs() {
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
        maxZoom={2250}
        minZoom={isPreview ? 0 : 250}
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
        <Background />

        <group>
          {POINTS_OF_INTEREST.map((poi, index) => (
            <>
              {poi.externalGeometry ? null : (
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
                  {poi.model}
                </Bounds>
              )}
            </>
          ))}
        </group>
      </group>
    </Canvas>
  );
}
