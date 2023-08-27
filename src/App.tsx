/* eslint-disable */
import * as React from 'react';
import { CubesStairs, POINTS_OF_INTEREST } from './experiences/CubesStairs';
import { NavBar } from './components/NavBar';

export default function App() {
  const [focusedPOI, focusPOI] = React.useState(POINTS_OF_INTEREST[0].key);
  const [isDarkMode, setDarkMode] = React.useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  return (
    <main className={isDarkMode ? 'dark' : 'light'}>
      <NavBar
        focusPOI={focusPOI}
        focusedPOI={focusedPOI}
        setDarkMode={setDarkMode}
        isDarkMode={isDarkMode}
      />
      <CubesStairs
        focusPOI={focusPOI}
        focusedPOI={focusedPOI}
        isDarkMode={isDarkMode}
      />
    </main>
  );
}
