import React, { useEffect, useState } from 'react';
import { PointOfInterestKey } from '../shared';

const POI_DOCS: Partial<Record<PointOfInterestKey, JSX.Element>> = {
  [PointOfInterestKey.Bionicle]: <>BONKLE</>,
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
