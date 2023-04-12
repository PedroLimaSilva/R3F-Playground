import * as React from 'react';
import { isPreview } from '../environment';

export function PointOfInterest(props: JSX.IntrinsicElements['mesh']) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        transparent={!isPreview}
        opacity={isPreview ? 1 : 0}
        wireframe={isPreview}
        color={'black' || '#E7AD00'}
      />
    </mesh>
  );
}
