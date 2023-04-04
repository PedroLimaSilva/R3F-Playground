import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import * as React from 'react'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useState } from 'react';
import { Box } from './components/box';

export function Experience() {
  return (
    <>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
}
