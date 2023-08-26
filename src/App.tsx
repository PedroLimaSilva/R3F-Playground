/* eslint-disable */
import * as React from 'react';
import { CubesStairs, POINTS_OF_INTEREST } from './experiences/CubesStairs';
import { NavBar } from './components/NavBar';

export default function App() {
  const [focusedPOI, focusPOI] = React.useState(POINTS_OF_INTEREST[0].key);
  return (
    <main>
      <NavBar focusPOI={focusPOI} focusedPOI={focusedPOI} />
      <CubesStairs focusPOI={focusPOI} focusedPOI={focusedPOI} />
    </main>
  );
}
