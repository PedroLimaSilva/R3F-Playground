import React, { useMemo, useState } from 'react';
import { AvMatoran } from './AvMatoran';
import { Background, BackgroundInstance } from './Background';

export function Mirror(
  props: JSX.IntrinsicElements['group'] & { isDarkMode?: boolean },
) {
  // Place objects to include in the mirror
  return (
    <group {...props} dispose={null}>
      <AvMatoran isDarkMode={props.isDarkMode} />
      <BackgroundInstance
        isDarkMode={props.isDarkMode}
        position={[1, 0.5, 1]}
      />
      <BackgroundInstance
        isDarkMode={props.isDarkMode}
        position={[0, -0.5, 1]}
      />
    </group>
  );
}
