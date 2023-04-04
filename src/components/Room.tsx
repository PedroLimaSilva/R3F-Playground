import * as React from 'react';

export function Room(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object

  return (
    <group scale={5} rotation={[0, -Math.PI / 4, 0]}>
      {/* make single mesh */}
      <mesh position={[0, 0, -0.55]}>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh position={[-0.55, 0, 0]}>
        <boxGeometry args={[0.1, 1, 1]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
    </group>
  );
}
