export const compareObjects = (first: object, second: object) => {
  return JSON.stringify(first) === JSON.stringify(second);
};
