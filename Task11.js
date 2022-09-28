console.log(`Написать функцию, которая возвращает отсортированный массив уникальных значений.`);

const printFiltredUniqueArray = (arr) => {
  if (arr.length === 0) {
    return "error"
  }

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
        count++;
      }
    }

    if (count > 0) {
      arr.splice(i, 1);
      i--;
    }
  }

  if (arr.length === 0) {
    return "No unique elements";
  }

  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  return arr;
}

const arrayNumber = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];

printFiltredUniqueArray(arrayNumber);