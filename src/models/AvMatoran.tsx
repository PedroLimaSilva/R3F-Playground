/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { MathUtils, ShaderMaterial, TextureLoader } from 'three';
import { DefaultVertex, TextureMixFragment } from '../materials/TextureMix';

export function AvMatoran(
  props: JSX.IntrinsicElements['group'] & { isDarkMode?: boolean },
) {
  const { nodes, materials } = useGLTF('/model/Matoran_Mirrorable.glb') as any;

  const nightTexture = useLoader(TextureLoader, '/model/BionicleBG_Night.png');
  nightTexture.flipY = false;
  const dayTexture = useLoader(TextureLoader, '/model/BionicleBG_Day.png');
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

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh geometry={nodes.BG2face.geometry} material={material} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001'].geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001_1'].geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001_2'].geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001_3'].geometry}
          material={materials['Material.027']}
        />
      </group>
      <group scale={[1, 1, -1]} position={[0, 0, -1]}>
        <mesh geometry={nodes.BG2face.geometry} material={material} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001'].geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001_1'].geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001_2'].geometry}
          material={materials['Material.028']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Part-32579_dot_dat001_3'].geometry}
          material={materials['Material.027']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model/Matoran.glb');
