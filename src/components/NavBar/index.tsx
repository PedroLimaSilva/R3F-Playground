import React, { useState } from 'react';
import { Document } from '../Document';
import { PointOfInterestKey } from '../../shared';

export function NavBar({
  focusedPOI,
  focusPOI,
  isDarkMode,
  setDarkMode,
}: {
  focusedPOI: PointOfInterestKey;
  focusPOI: React.Dispatch<React.SetStateAction<PointOfInterestKey>>;
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function focusOn(key: PointOfInterestKey) {
    focusPOI(key);
    setNav(false);
  }

  const [isPortrait, setIsPortrait] = React.useState(
    window.innerHeight > window.innerWidth,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener(
      'resize',
      handleResize as unknown as (this: Window, ev: UIEvent) => any,
    );
    window.addEventListener(
      'orientationchange',
      handleResize as unknown as (this: Window, ev: Event) => any,
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize as unknown as (this: Window, ev: UIEvent) => any,
      );
      window.removeEventListener(
        'orientationchange',
        handleResize as unknown as (this: Window, ev: Event) => any,
      );
    };
  }, []);

  const [isOpen, setNav] = useState(false);
  return (
    <nav className={`NavBar ${isOpen && 'open'} ${!isPortrait && 'landscape'}`}>
      <Document isPortrait={isPortrait} focusedPOI={focusedPOI}></Document>
      <div className="header" onClick={() => setNav(!isOpen)}>
        <p>
          hello
          <span className="question fade-in delayed-5">
            , would you like a tour?
          </span>
        </p>
        <button
          type="button"
          className="darkModeToggle"
          onClick={(e) => {
            e.stopPropagation();
            setDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? (
            <span className="material-symbols-outlined">dark_mode</span>
          ) : (
            <span className="material-symbols-outlined">light_mode</span>
          )}
        </button>
      </div>
      <ul>
        <li onClick={() => focusOn(PointOfInterestKey.Office)}>Interests</li>
        <li onClick={() => focusOn(PointOfInterestKey.Bionicle)}>Hobbies</li>
      </ul>
    </nav>
  );
}
