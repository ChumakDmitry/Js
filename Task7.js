console.log(`Дана строка. Нужно написать функцию, которая возвращает значение 
true, если строка является палиндромом, или false если нет.`);

const string = 'tenet';

const checkPolyndrom = (str) => {
  str = str.toLowerCase().split(' ').join('');
  let flag = true;

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str[i] !== str[j]) {
      return flag = false;
    }
  }

  return flag;
}

checkPolyndrom(string);