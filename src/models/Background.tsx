/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { MathUtils, ShaderMaterial, TextureLoader } from 'three';
import { DefaultVertex, TextureMixFragment } from '../materials/TextureMix';

const POSITIONS: Array<[number, number, number]> = [
  // [0, 0, 0], // 0 Landing
  // [1, 0, 1], // R1 Matoran
  [-1, 0, -1], // L1
  [2, 0, 2], // R2
  [-2, 0, -2], // L2
  [3, 0, 3], // R3
  [-3, 0, -3], // L3
  [4, 0, 4], // R4
  [-4, 0, -4], // L4

  // [1, 1, 0], // R1 Office
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

export function Background(
  props: JSX.IntrinsicElements['group'] & { isDarkMode: boolean },
) {
  const { nodes } = useGLTF('/model/BackgroundInstance.glb') as any;

  const nightTexture = useLoader(TextureLoader, '/model/Instance_Night.png');
  nightTexture.flipY = false;
  const dayTexture = useLoader(TextureLoader, '/model/Instance_Day.png');
  dayTexture.flipY = false;

  const [mix, setMix] = useState(props.isDarkMode ? 1 : 0);

  useFrame(() => {
    if ((props.isDarkMode && mix !== 1) || (!props.isDarkMode && mix !== 0)) {
      setMix(MathUtils.lerp(mix, props.isDarkMode ? 1 : 0, 0.05));
    }
  });

  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          textureA: { value: dayTexture as THREE.Texture },
          textureB: { value: nightTexture as THREE.Texture },
          mixWeight: { value: mix },
        },
        vertexShader: DefaultVertex,
        fragmentShader: TextureMixFragment,
      }),
    [mix],
  );

  const mesh = POSITIONS.map((pos) => (
    <mesh
      key={`BG:${pos.toString()}`}
      position={[pos[0], pos[1] + 0.5, pos[2]]}
      geometry={nodes.Cube001_Baked.geometry}
      material={material}
    />
  ));

  return (
    <group {...props} dispose={null}>
      {mesh}
    </group>
  );
}

useGLTF.preload('/model/BackgroundInstance.glb');
