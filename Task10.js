console.log(`Вернуть массив тех значений, которые есть в первом, но нет во втором.`);

const compareArray = (arrayFirst, arraySecond) => {
  if (arraySecond.length === 0) {
    return arrayFirst;
  }
  if (arrayFirst.length === 0) {
    return "error";
  }

  arraySecond.forEach(element => {
    for (let i = 0; i < arrayFirst.length; i++) {
      if (arrayFirst[i] === element) {
        arrayFirst.splice(i, 1); 
        i--;
      }
    }
  });

  if (arrayFirst.length === 0) {
    return 'No unique element';
  }

  return arrayFirst;
}

const firstArray = [4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4];
const secondArray = [4, 5, 6, 7, 8];

compareArray(firstArray, secondArray);