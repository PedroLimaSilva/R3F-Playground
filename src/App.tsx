/* eslint-disable */
import * as THREE from 'three';
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';

export default function App() {
  return (
    <Canvas>
      <Experience />
      <OrthographicCamera
        makeDefault
        zoom={1}
        top={200}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={2000}
        position={[0, 0, 200]}
      />
    </Canvas>
  );
}
