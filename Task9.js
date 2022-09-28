console.log(`Отфильтровать коллекцию по нескольким полям. Функция параметрами принимает массив, 
первое значение - поле с которым равно, второе значение, больше которого другое поле. Например, 
в коллекции мне нужно вывести значения, в которых возраст больше 18, а страна 'RF'.`);

const arrayObject = [
  {
    name: "test", 
    age: 34, 
    country: "RF",
  },
  {
    name: "test2", 
    age: 12, 
    country: "RF",
  },
  {
    name: "test1", 
    age: 54, 
    country: "RF",
  },
];

const firstValue = "RF";
const secondValue = 18;

const findObjects = (arr, valueFirst, valueSecond) => {
  const resultArray = [];

  arr.forEach(element => {
    let count = 0;
    for (let key in element) {
      if (key === "country" && element[key] === valueFirst) {
        count++;
      }
      if (key === "age" && element[key] > valueSecond) {
        count++;
      }
    }
    if (count === 2) {
      resultArray.push(element);
    }
  });

  return resultArray;
}

findObjects(arrayObject, firstValue, secondValue);