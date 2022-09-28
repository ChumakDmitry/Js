console.log(`Реализуйте функцию, которая параметрами принимает два объекта и возвращает сообщение равны ли эти два объекта.`);

const firstObject = { 
  test: 8, 
  text: 9, 
};

const secondObject = { 
  test: 8, 
  text: 9, 
};

const compareObject = (objectFirst, objectSecond) => {
  let i = 0;
  let j = 0;

  for (let keyFirst in objectFirst) {
    j++;

    for (let keySecond in objectSecond) {
      if (keySecond === keyFirst && objectFirst[keyFirst] === objectSecond[keySecond]) {
        i++;
        break;
      }
    }
  }

  if (i === j) {
    return 'true';
  }

  return 'false';
}

compareObject(firstObject, secondObject);