const isUniq = function (element, index, array) {
  return array.indexOf(element) === index;
};
const isEven = function (element) {
  return element % 2 === 0;
};

function filterArray(array, cb) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    if (cb(element, index, array)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]
