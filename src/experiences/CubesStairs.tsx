import React, {
  MutableRefObject,
  cloneElement,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  AdaptiveDpr,
  Bounds,
  Loader,
  OrbitControls,
  PivotControls,
  useHelper,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { PointOfInterest } from '../components/PointOfInterest';

import { AvMatoran } from '../models/AvMatoran';
import { LivingRoom } from '../models/LivingRoom';
import { Office } from '../models/Office';
import { Background } from '../models/Background';
import { isPreview } from '../environment';
// import { Hogwarts } from '../models/Hogwarts';
import { MainCharacter } from '../models/MainCharacter';
import { Robot } from '../models/Robot';
import {
  Color,
  DirectionalLight,
  DirectionalLightHelper,
  Event,
  MathUtils,
  Object3D,
} from 'three';

const NIGHT_LIGHT_COLOR = new Color('#5779ad');
const DAY_LIGHT_COLOR = new Color('#FFFFFF');
const NIGHT_LIGHT_INTENSITY = 1;
const DAY_LIGHT_INTENSITY = 0.8;

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
  // { // TOO BIG; FIX IT
  //   position: [1, 0.5, 1],
  //   key: 'Hogwarts',
  //   margin: 1.5,
  //   model: <Hogwarts position={[1, 0, 1]} />,
  // },
  {
    key: `Undecided ${[-1, 0.5, -1]}`,
    position: [-1, 0.5, -1],
    margin: 1.5,
  },
  {
    position: [1, 0.5, 1],
    key: 'Bionicle',
    margin: 1.5,
    model: <AvMatoran position={[1, 0, 1]} />,
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
        shadows
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
          maxZoom={1000}
          minZoom={isPreview ? 0 : 200}
          // maxDistance={1}
          // minDistance={1}
          enablePan={isPreview}
          maxPolarAngle={Math.PI / 2}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />

        <Lights isDarkMode={isDarkMode} />
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

function Lights({ isDarkMode }: { isDarkMode: boolean }) {
  const [fillLightColor, setFillLightColor] = useState(
    isDarkMode ? NIGHT_LIGHT_COLOR : DAY_LIGHT_COLOR,
  );
  const [fillLightIntensity, setFillLightIntensity] = useState(
    isDarkMode ? NIGHT_LIGHT_INTENSITY : DAY_LIGHT_INTENSITY,
  );

  useFrame(() => {
    if (
      (isDarkMode && fillLightColor !== NIGHT_LIGHT_COLOR) ||
      (!isDarkMode && fillLightColor !== DAY_LIGHT_COLOR)
    ) {
      const targetColor = isDarkMode ? NIGHT_LIGHT_COLOR : DAY_LIGHT_COLOR;
      const newColor = new Color(
        MathUtils.lerp(fillLightColor.r, targetColor.r, 0.05),
        MathUtils.lerp(fillLightColor.g, targetColor.g, 0.05),
        MathUtils.lerp(fillLightColor.b, targetColor.b, 0.05),
      );
      setFillLightColor(newColor);
    }
    if (
      (isDarkMode && fillLightIntensity !== NIGHT_LIGHT_INTENSITY) ||
      (!isDarkMode && fillLightIntensity !== DAY_LIGHT_INTENSITY)
    ) {
      const target = isDarkMode ? NIGHT_LIGHT_INTENSITY : DAY_LIGHT_INTENSITY;
      setFillLightIntensity(MathUtils.lerp(fillLightIntensity, target, 0.05));
    }
  });

  const dirLight = useRef<DirectionalLight>(null);

  isPreview &&
    useHelper(
      dirLight as MutableRefObject<Object3D<Event>>,
      DirectionalLightHelper,
      1,
      'red',
    );

  return (
    <>
      <ambientLight intensity={0.8} color={fillLightColor} />
      <directionalLight
        ref={dirLight}
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        intensity={fillLightIntensity}
        color={fillLightColor}
        position={[1.5, 1, 1]}
        scale={3}
      />
    </>
  );
}
