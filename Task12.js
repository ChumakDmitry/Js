console.log(`Реализуйте функцию, которая принимает на вход объект типа { "dog": 6, "cat": 11 } и возвращает массив пар.`);

const object = { 
  "dog": 6, 
  "cat": 11,
};

const returnArrayPair = (obj) => {
  const resultArray = [];

  for (let key in obj) {
    const buffArray = [];

    buffArray.push(key, obj[key]);
    resultArray.push(buffArray);
  }
  
  return resultArray;
}

returnArrayPair(object);