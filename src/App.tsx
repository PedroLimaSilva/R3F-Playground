/* eslint-disable */
import * as React from 'react';
import { experienceIndex } from './environment';
import { CubesStairs } from './experiences/CubesStairs';
import { Pilar } from './experiences/Pilar';

export default function App() {
  switch (experienceIndex) {
    case 0:
      return <CubesStairs />;
    default:
      return <Pilar />;
  }
  return null;
}
