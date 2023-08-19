/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React from 'react';
import { useGLTF } from '@react-three/drei';

const POSITIONS: Array<[number, number, number]> = [
  // [0, 0, 0], // 0 FloatingCube
  [1, 0, 1], // R1
  [-1, 0, -1], // L1
  [2, 0, 2], // R2
  [-2, 0, -2], // L2
  [3, 0, 3], // R3
  [-3, 0, -3], // L3
  [4, 0, 4], // R4
  [-4, 0, -4], // L4

  // [1, 1, 0], // R1 Hogwarts
  // [0, 1, -1], // L1 Living Room
  [2, 1, 1], // R2
  [-1, 1, -2], // L2
  [3, 1, 2], // R3
  [-2, 1, -3], // L3
  [4, 1, 3], // R4
  [-3, 1, -4], // L4

  [0, -1, 1], // R1
  [-1, -1, 0], // L1
  [1, -1, 2], // R2
  [-2, -1, -1], // L2
  [2, -1, 3], // R3
  [-3, -1, -2], // L3
  [3, -1, 4], // R4
  [-4, -1, -3], // L4

  [1, 2, -1], // 0
  [2, 2, 0], // R1
  [0, 2, -2], // L1
  [3, 2, 1], // R2
  [-1, 2, -3], // L2
  [4, 2, 2], // R3
  [-2, 2, -4], // L3

  [-1, -2, 1], // 0
  [0, -2, 2], // R1
  [-2, -2, 0], // L1
  [1, -2, 3], // R2
  [-3, -2, -1], // L2
  [2, -2, 4], // R3
  [-4, -2, -2], // L3

  [2, 3, -1], // R1
  [1, 3, -2], // L1
  [3, 3, 0], // R2
  [0, 3, -3], // L2
  [4, 3, 1], // R3
  [-1, 3, -4], // L3

  [-1, -3, 2], // R1
  [-2, -3, 1], // L1
  [0, -3, 3], // R2
  [-3, -3, 0], // L2
  [1, -3, 4], // R3
  [-4, -3, -1], // L3

  [2, 4, -2], // 0
  [3, 4, -1], // R1
  [1, 4, -3], // L1
  [4, 4, 0], // R2
  [0, 4, -4], // L2

  [-2, -4, 2], // 0
  [-1, -4, 3], // R1
  [-3, -4, 1], // L1
  [0, -4, 4], // R2
  [-4, -4, 0], // L2
];

export function Background(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model/BackgroundInstance.glb') as any;

  const mesh = POSITIONS.map((pos) => (
    <mesh
      key={`BG:${pos.toString()}`}
      position={[pos[0], pos[1] + 0.5, pos[2]]}
      geometry={nodes.Cube001_Baked.geometry}
      material={materials.BackgroundInstance_Baked}
    />
  ));

  return (
    <group {...props} dispose={null}>
      {mesh}
    </group>
  );
}

useGLTF.preload('/model/BackgroundInstance.glb');
