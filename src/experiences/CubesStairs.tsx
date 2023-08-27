import React, { cloneElement } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, Bounds, Loader, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { PointOfInterest } from '../components/PointOfInterest';

import { AvMatoran } from '../models/AvMatoran';
import { LivingRoom } from '../models/LivingRoom';
import { Office } from '../models/Office';
import { Background } from '../models/Background';
import { isPreview } from '../environment';
import { Hogwarts } from '../models/Hogwarts';
import { MainCharacter } from '../models/MainCharacter';
import { Robot } from '../models/Robot';

export const POINTS_OF_INTEREST: Array<{
  key: string;
  position: [number, number, number];
  margin: number;
  scale?: number;
  childOf?: number[];
  model?: JSX.Element;
}> = [
  {
    key: 'MainCharacter',
    position: [0, 0.5, 0],
    margin: 1.5,
    model: <MainCharacter position={[0, 0, 0]} />,
  },
  {
    position: [1, 0.5, 1],
    key: 'Hogwarts',
    margin: 1.5,
    model: <Hogwarts position={[1, 0, 1]} />,
  },
  {
    key: `Undecided ${[-1, 0.5, -1]}`,
    position: [-1, 0.5, -1],
    margin: 1.5,
  },
  {
    position: [0, -0.5, 1],
    key: 'Bionicle',
    margin: 1.5,
    model: <AvMatoran position={[0, -1, 1]} />,
  },
  {
    key: 'LivingRoom',
    position: [0, 1.5, -1],
    margin: 1.5,
    model: <LivingRoom position={[0, 1, -1]} isDarkMode />,
  },
  {
    key: 'Office',
    position: [1, 1.5, 0],
    margin: 1.5,
    model: <Office position={[1, 1, 0]} />,
  },
  { key: `Undecided ${[-1, -0.5, 0]}`, position: [-1, -0.5, 0], margin: 1.5 },
];

export function CubesStairs({
  focusedPOI,
  focusPOI,
  isDarkMode,
}: {
  focusedPOI: string;
  focusPOI: React.Dispatch<React.SetStateAction<string>>;
  isDarkMode: boolean;
}) {
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
        <AdaptiveDpr pixelated />
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
          <Background isDarkMode={isDarkMode} />

          <Robot />

          <group>
            {POINTS_OF_INTEREST.map((poi) => (
              <Bounds
                fit={focusedPOI === poi.key}
                key={`POI:${poi.key}`}
                clip
                observe
                margin={poi.margin}
              >
                <PointOfInterest
                  position={poi.position}
                  scale={poi.scale === undefined ? 1 : poi.scale}
                  onClick={() => {
                    if (focusedPOI !== poi.key) {
                      focusPOI(poi.key);
                    }
                  }}
                />
                {poi.model && cloneElement(poi.model, { isDarkMode })}
              </Bounds>
            ))}
          </group>
        </group>
      </Canvas>
      <Loader />
    </>
  );
}
