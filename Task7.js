console.log(`Дана строка. Нужно написать функцию, которая возвращает значение 
true, если строка является палиндромом, или false если нет.`);

const string = 'tenet';

const checkPalyndrome = (str) => {
  if (str.length < 2) {
    return "error";
  }

  str = str.toLowerCase().split('');

  for (let i = 0 ; i < str.length; i++) {
    if (str[i] === ',' || str[i] === '-' || str[i] === '.' || str[i] === ' ') {
      str.splice(i, 1);
      i--;
    }
  }

  str = str.join('');
  let flag = true;

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str[i] !== str[j]) {
      return flag = false;
    }
  }

  return flag;
}

checkPalyndrome(string);