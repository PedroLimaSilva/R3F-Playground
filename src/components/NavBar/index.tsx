import React, { useState } from 'react';
import { POINTS_OF_INTEREST } from '../../experiences/CubesStairs';

export function NavBar({
  focusedPOI,
  focusPOI,
  isDarkMode,
  setDarkMode,
}: {
  focusedPOI: string;
  focusPOI: React.Dispatch<React.SetStateAction<string>>;
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function focusOn(key: string) {
    focusPOI(key);
    setNav(false);
  }

  const [isOpen, setNav] = useState(false);
  return (
    <nav className={`NavBar ${isOpen && 'open'}`}>
      <div className="header" onClick={() => setNav(!isOpen)}>
        hello<span className="fade-in delayed-5">, would you like a tour?</span>
        <button
          type="button"
          className="darkModeToggle"
          onClick={() => setDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <span className="material-symbols-outlined">dark_mode</span>
          ) : (
            <span className="material-symbols-outlined">light_mode</span>
          )}
        </button>
      </div>
      <ul>
        <li onClick={() => focusOn('LivingRoom')}>Experience</li>
        <li onClick={() => focusOn('Office')}>Interests</li>
        <li onClick={() => focusOn('Bionicle')}>Hobbies</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
}
