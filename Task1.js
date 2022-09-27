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

const compareString = (strFirst, strSecond) => {
  const num = lengthStr(strFirst) - lengthStr(strSecond);

  if (num > 0) {
    return strFirst.slice(lengthStr(strSecond));
  } 
  if (num < 0) {
    return strSecond.slice(lengthStr(strFirst));
  }

  return 'Длины строк одинаковы';
}

compareString(firstString, secondString);