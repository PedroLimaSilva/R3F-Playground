
export const isPreview =
  process.env.NODE_ENV !== 'production' ||
  process.env.REACT_APP_VERCEL_ENV === 'preview';
