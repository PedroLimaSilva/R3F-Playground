/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react';
import { useGLTF, useMatcapTexture } from '@react-three/drei';

export function AvMatoran(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/model/avmatoran.glb') as any;

  /**
   * Golds
   * E6BF3C_5A4719_977726_FCFC82 // Yellow gold
   * 51462B_DFCA7E_948050_A49874
   * 8A5B34_F3BD7C_DA9758_BE7E45 // Copper
   * 6E5137_E8CA90_271912_B99C74 // Bronze
   * 71623B_ECDE8C_30250A_ABA69A // Pearl Gold
   * 613F04_D68C04_A45F04_1F0F04
   * 5A492B_DEC583_987D4D_AC9C74 // Beaten gold
   */
  const [goldTexture] = useMatcapTexture('71623B_ECDE8C_30250A_ABA69A', 256);
  const goldMaterial = <meshMatcapMaterial matcap={goldTexture} />;

  /**
   * Whites
   * DEE3E8_A6AEB5_BCC4CC_BCC4C4
   * CCC5C9_3B2B2B_67585B_7F7375
   * C8C8C8_3F3F3F_787878_5C5C5C
   * C4C6C6_4D5756_646463_7A8080
   */
  const [whiteTexture] = useMatcapTexture('C4C6C6_4D5756_646463_7A8080', 256);
  const whiteMaterial = <meshMatcapMaterial matcap={whiteTexture} />;

  /**
   * Grays
   * 8A7666_3C332C_C6AEA2_54443C
   * 6D6D6D_3E3E3E_C0C0C0_949494
   * 5D5854_1A1714_373330_2C2424
   * 525050_D4D3D3_959393_ACACAC
   */
  const [grayTexture] = useMatcapTexture('525050_D4D3D3_959393_ACACAC', 256);
  const grayMaterial = <meshMatcapMaterial matcap={grayTexture} />;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow geometry={nodes.LLeg.geometry}>
        {goldMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.RLeg.geometry}>
        {goldMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.RArm.geometry}>
        {goldMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.LArm.geometry}>
        {goldMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.Torso.geometry}>
        {whiteMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.Face.geometry}>
        {grayMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.Pakari.geometry}>
        {goldMaterial}
      </mesh>
      {/* 
      <mesh castShadow geometry={nodes.Miru.geometry}>
        {goldMaterial}
      </mesh>
      <mesh castShadow geometry={nodes.Kakama.geometry}>
        {goldMaterial}
      </mesh>
      */}
    </group>
  );
}

useGLTF.preload('/model/avmatoran.glb');