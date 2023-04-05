import * as React from 'react';
import { Float, FloatProps } from '@react-three/drei';

export function Box(props: FloatProps) {
  return (
    <Float
      {...props}
      speed={1} // Animation speed, defaults to 1
      rotationIntensity={1} // XYZ rotation intensity, defaults to 1
      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
      floatingRange={[-0.5, 0.2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#E7AD00'} />
      </mesh>
    </Float>
  );
}
