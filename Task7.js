console.log(`Дана строка. Нужно написать функцию, которая возвращает значение 
true, если строка является палиндромом, или false если нет.`);

const string = 'tenet';

const checkPalyndrome = (str) => {
  if (str.length < 2) {
    return "error";
  }
  let resultString = str.toLowerCase();

  for (let i = 0 ; i < resultString.length; i++) {
    if (resultString[i] === ',' || resultString[i] === '-' || resultString[i] === '.' || resultString[i] === ' ') {
      resultString.slice(i, 1);
      i--;
    }
  }
  let flag = true;

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (resultString[i] !== resultString[j]) {
      return flag = false;
    }
  }

  return flag;
}

checkPalyndrome(string);