export const normilizeMessage = (value) => {
  if (typeof value !== 'string') return null;
  return value
    .trimLeft()
    .replace(/[^0-9a-z\.,\-A-Z\s]/g, '');
}
