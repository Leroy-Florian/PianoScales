import {ICommonsToolsPorts} from '../ports/commonsToolsPorts';

const arraysAreEqual = (a : any[], b : any[]): boolean => {
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!arraysAreEqual(a[i], b[i])) {
      return false;
    }
  }
  return true;
};

const pickRandomItemInArray = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};


export const commonsTools : ICommonsToolsPorts = {
  arraysAreEqual,
  pickRandomItemInArray,
};
