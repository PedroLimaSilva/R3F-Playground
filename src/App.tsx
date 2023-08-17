/* eslint-disable */
import * as THREE from 'three';
import * as React from 'react';
import { experienceIndex } from './environment';
import { CubesStairs } from './experiences/CubesStairs';
import { Pilar } from './experiences/Pilar';
import { CharacterExperience } from './experiences/CharacterExperience';

export default function App() {
  switch (experienceIndex) {
    case 0:
      return <CubesStairs />;
    case 1:
      return <Pilar />;
    default:
      return <CharacterExperience />;
  }
  return null;
}
