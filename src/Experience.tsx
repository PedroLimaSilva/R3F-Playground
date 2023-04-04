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
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[-10, 10, 10]} intensity={0.5} />

      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Room />
    </>
  );
}
