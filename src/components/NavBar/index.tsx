import React, { useState } from 'react';
import { POINTS_OF_INTEREST } from '../../experiences/CubesStairs';

export function NavBar({
  focusedPOI,
  focusPOI,
}: {
  focusedPOI: string;
  focusPOI: React.Dispatch<React.SetStateAction<string>>;
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
      </div>
      <ul>
        <li onClick={() => focusOn('Office')}>Interests</li>
        <li onClick={() => focusOn('Bionicle')}>Hobbies</li>
      </ul>
    </nav>
  );
}
