import React, { useEffect, useState } from 'react';
import { PointOfInterestKey } from '../shared';

const POI_DOCS: Partial<Record<PointOfInterestKey, JSX.Element>> = {
  [PointOfInterestKey.Bionicle]: <>BONKLE</>,
  [PointOfInterestKey.MainCharacter]: (
    <>
      <h3>👋 Welcome to my digital universe!</h3>

      <p>
        I'm <strong>Pedro</strong>, a passionate Frontend Web Developer on a
        mission to craft immersive online experiences. Step into my world, where
        creativity meets technology, and let me guide you through the virtual
        realms that reflect my journey, interests, and personality.
      </p>
      <p>
        As you explore this 3D space, you'll encounter different scenes that
        unveil facets of who I am: from my professional expertise in frontend
        development to my diverse interests and hobbies. Whether it's tinkering
        with code, embracing the latest web trends, or indulging in my love for
        design, you'll find it all here.
      </p>
      <p>
        At the heart of it, this website isn't just about showcasing my skills.
        It's about connecting with like-minded individuals and forward-thinking
        companies. So, grab a virtual seat, interact with my digital avatar, and
        let's embark on an exciting journey together.
      </p>
      <p>
        Feel free to roam around, explore, and reach out if you want to
        collaborate, discuss ideas, or simply geek out about web development.
        Let's turn pixels into possibilities and transform the digital
        landscape, one line of code at a time.
      </p>
      <p>
        Ready to dive in? Let's make the web a more vibrant, accessible, and
        delightful place for all.
      </p>

      <p>See you on the other side of the screen!</p>

      <strong>Pedro Lima e Silva</strong>
    </>
  ),
  [PointOfInterestKey.LivingRoom]: <>Robot goes brrr</>,
  [PointOfInterestKey.Office]: <>Printer goes brrr</>,
};

let docTimer: NodeJS.Timer | undefined;

export function Document({
  focusedPOI,
  isPortrait,
}: {
  focusedPOI: PointOfInterestKey;
  isPortrait: boolean;
}) {
  const [currentDoc, setCurrentDoc] = useState(POI_DOCS[focusedPOI]);
  const [isLeaving, setIsLeaving] = useState(!POI_DOCS[focusedPOI]);

  useEffect(() => {
    clearTimeout(docTimer);

    const nextDoc = POI_DOCS[focusedPOI];
    if ((currentDoc && !nextDoc) || (!currentDoc && nextDoc)) {
      setCurrentDoc(nextDoc);
      setIsLeaving(false);
      return;
    }

    setIsLeaving(true);
    if (nextDoc) {
      docTimer = setTimeout(() => {
        setCurrentDoc(nextDoc);
        setIsLeaving(false);
      }, 700);
    } else {
      docTimer = undefined;
    }
  }, [focusedPOI]);

  return (
    <article
      className={`Document ${!isPortrait && 'landscape'} ${
        (!currentDoc || isLeaving) && 'slideOut'
      }`}
    >
      {currentDoc}
    </article>
  );
}
