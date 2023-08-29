/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react';
import { Grid, useAnimations, useGLTF } from '@react-three/drei';
import { AnimationAction, MathUtils } from 'three';
import { useFrame } from '@react-three/fiber';
import { Landing } from './Landing';

let trackingTarget: { x: number; y: number; z: number };

export function MainCharacter(props: JSX.IntrinsicElements['group']) {
  const hips = useRef(null);

  const { nodes, materials } = useGLTF('/model/ReadyPlayerMe.glb') as any;
  const { animations } = useGLTF('/model/MaleIdle.glb');
  const { actions } = useAnimations(animations, hips);

  useEffect(() => {
    (actions?.['Armature|mixamo.com|Layer0.001'] as AnimationAction).play();
    if (!trackingTarget) {
      trackingTarget = {
        x: 0,
        y: 0,
        z: 0,
      };
    }
  });

  useFrame(({ mouse, viewport, camera }) => {
    if (trackingTarget) {
      const { Head, RightEye, LeftEye } = nodes;
      const newTarget = {
        x: ((camera.position.x + mouse.x) * viewport.width) / 2,
        y: (mouse.y * viewport.height) / 2,
        z: camera.position.z / 2,
      };
      trackingTarget = {
        x: MathUtils.lerp(trackingTarget.x, newTarget.x, 0.05),
        y: MathUtils.lerp(trackingTarget.y, newTarget.y, 0.05),
        z: MathUtils.lerp(trackingTarget.z, newTarget.z, 0.05),
      };

      Head.lookAt(trackingTarget.x, trackingTarget.y, trackingTarget.z);
      RightEye.lookAt(newTarget.x, newTarget.y, newTarget.z);
      LeftEye.lookAt(newTarget.x, newTarget.y, newTarget.z);
    }
  });

  return (
    <group {...props} dispose={null}>
      <Landing />
      <group scale={0.35} rotation={[0, -Math.PI / 4, 0]}>
        <primitive ref={hips} object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model/MaleIdle.glb');
useGLTF.preload('/model/ReadyPlayerMe.glb');
