console.log(`В функцию передается несколько массивов. 
Из первого массива, переданного в функцию, вывести элементы, 
которые имеются во всех других массивах, переданных в функцию.`);

const arrayFirst = [3, 6, 1, 8, 3, 1, 6, 3, 6, 3, 6];
const arraySecond = [1, 4, 2, 4];
const arrayThird = [6, 3, 2, 8, 1];

const findNumber = (...arrays) => {
  if (arrays.length < 1) {
    return 'error';
  } else if (arrays.length < 2) {
    return arrays[0];
  } 

  const resultArray = [];
  const buffArray = arrays.shift();

  buffArray.forEach(element => {
    let count = 0;
    arrays.forEach(item => {
      for (let j = 0; j < item.length; j++) {
        if (element === item[j]) {
          item.splice(j, 1);
          count++;
          break;
        }
      }
    });

    if(count === arrays.length) {
      resultArray.push(element);
    }
  });

  return resultArray;
}

findNumber(arrayFirst, arraySecond, arrayThird);