console.log(`Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.`);

const object = {
  name: "test",
  age: 25,
  weight: 65,
  height: 165,
};

const multiplicateNumberValue = (obj) => {
  for (let key in obj) {
    if (+obj[key]) {
      obj[key] = obj[key] * 2;
    }
  }

  return obj;
}

multiplicateNumberValue(object);