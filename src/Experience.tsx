import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import * as React from 'react';
import { Box } from './components/box';
import { Room } from './components/Room';

export function Experience() {
  return (
    <>
      <Perf position='top-left' />

      <OrbitControls
        makeDefault
        maxDistance={15}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
      />

      <ambientLight intensity={0.3} />
      <pointLight
        castShadow
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
        intensity={0.8}
        position={[100, 100, 100]}
      />

      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Room />
    </>
  );
}
