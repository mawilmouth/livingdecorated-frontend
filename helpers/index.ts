import loopWithBreak from './loopWithBreak';

export const getField = (field: string, arr: any[]): any[] => {
  return arr.reduce((acc, item) => {
    if (item[field] != null) acc.push(item[field]);
    return acc;
  }, []);
};

export const trimString = (
  string: string,
  length: number,
  appendWith: string = ''
): string => {
  if (string.length <= length) return string;

  return `${string.substring(0, length)}${appendWith}`
};

export { loopWithBreak };