import React, { useState } from 'react';

export function NavBar() {
  const [isOpen, setNav] = useState(false);
  return (
    <nav className={`NavBar ${isOpen && 'open'}`}>
      <div className="header" onClick={() => setNav(!isOpen)}>
        hello<span className="fade-in delayed-5">, would you like a tour?</span>
      </div>
      <ul>
        <li>Interests</li>
        <li>Hobbies</li>
      </ul>
    </nav>
  );
}
