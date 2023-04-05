import * as React from 'react';
import { Float, FloatProps } from '@react-three/drei';

export function PointOfInterest(props: JSX.IntrinsicElements['mesh']) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        transparent
        opacity={0}
        color={'black' || '#E7AD00'}
      />
    </mesh>
  );
}
