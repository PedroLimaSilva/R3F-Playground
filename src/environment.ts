export const isPreview =
  process.env.NODE_ENV !== 'production' ||
  process.env.REACT_APP_VERCEL_ENV === 'preview';

const N_EXPERIENCES = 1;

export const experienceIndex = Date.now() % N_EXPERIENCES;
