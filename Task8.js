console.log(`Удалить из массива значения, индексы которых указаны во втором массиве.`);

const deleteElementByIndex = (arrayNumber, arrayIndex) => {
  arrayIndex.forEach(element => {
    if (element > arrayNumber.length - 1 || element < 0) {
      return "Выход из диапазона индексации";
    }
    arrayNumber[element] = null;
  });

  return filter(arrayNumber);
}

const filter = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === null) {
      arr.splice(index, 1);
      index--;
    }
  }

  return arr;
}

const numberArray = [5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1];
const indexArray = [2, 5, 1];

deleteElementByIndex(numberArray, indexArray);