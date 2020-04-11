export const compareObjects = (first: any, second: any) => {
  return JSON.stringify(first) === JSON.stringify(second);
};
