console.log(`Напишите функцию range(), принимающую два аргумента: начало и конец 
диапазона. Функция возвращает массив, который содержит все числа из диапазона, 
включая начальное и конечное. Третий необязательный аргумент функции range() – 
шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом.`);

const range = (start, end, step = 1) => {
  if ((step > 0 && start > end) || (step < 0 && start < end)) {
    return 'Error, check data';
  }

  const resultArray = [];
  let flag = true;
  const buff = start;

  if (start > end) {
    start = end;
    end = buff;
    flag = false;
  }

  if (step < 0) {
    step = -step;
    start = end;
    end = buff;
    flag = false;
  }

  for (start; start <= end; start += step) {
    flag ? resultArray.push(start) : resultArray.unshift(start);
  }

  return resultArray;
}

range(5, 2);