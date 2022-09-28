console.log(`Напишите функцию, которая четное число возводит в квадрат, а нечетное - в куб. 
После умножает полученное значение на второй параметр. Затем прибавляет третий параметр и 
находит корень от получившегося результата, округленный до сотых. Но за счет того, что функция вызывает функцию.`);

const round = (number) => {
  const str = `${number}`;
  let result = null;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      result = Number(str.slice(0, i + 3));
      return result;
    }
  }
}

const calcNumber = (x) => {
  if (x === 0) {
    return "error";
  }
  x % 2 === 0 ? x = x ** 2 : x = x ** 3;

  return multiplicateNumber = (y = 0) => {
    x *= y;
    
    return sumAndSquareRootNumber = (z = 0) => {
      x += z;
      x = x ** 0.5;
      x = round(x);

      return x;
    }
  }
}

calcNumber(2)(4)(5);