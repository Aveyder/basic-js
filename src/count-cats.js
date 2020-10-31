
module.exports = function countCats(matrix) {
  let counter = 0;
  for (const arr of matrix) {
    for (const el of arr) {
      if (el === '^^') {
        counter++;
      }
    }
  }

  return counter;
};
