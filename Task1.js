console.log(`Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.`);

const lengthStr = (str) => {
  const arr = str.split('');
  let i = 0;

  arr.forEach(element => {
    i++
  });

  return i;
}

const firstString = 'text education part 2';
const secondString = 'text education';

const printRest = (strFirst, strSecond) => {
  const num = lengthStr(strFirst) - lengthStr(strSecond);
  let strResult = '';

  if (num > 0) {
    strResult = strFirst.slice(lengthStr(strSecond));
  } else if (num < 0) {
    strResult = strSecond.slice(lengthStr(strFirst));
  } else {
    strResult = 'Длины строк одинаковы';
  }

  return strResult;
}

printRest(firstString, secondString);