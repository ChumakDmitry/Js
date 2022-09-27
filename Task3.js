console.log(`Напишите функцию removeDuplicates(arr), которая возвращает массив, в 
котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).`);

const removeDuplicates = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === "string") {
      arr[i] = arr[i].toLowerCase();
    }
  }

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }

  return arr;
}

const array = ["text", "education", "part", "Text"];

removeDuplicates(array);