console.log(`Дана строка. Разделите строку на фрагменты по три подряд идущих символа. В каждом 
фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого 
фрагмента, например, нижнее подчеркивание (_). Показать фрагменты, упорядоченные по алфавиту.`);

const string = "test education part 211";

const fragmentationString = (str) => {
  let buff = [];
  let resultArray = [];

  for (let i = 0; i < str.length; i++) {
    buff.push(str[i]);

    if ((i + 1) % 3 === 0) {
      buff[1] = '_';
      resultArray.push(buff.join(''));
      buff = [];
    }
    if (i === str.length - 1 && buff.length > 0) {
      if (buff[1]) {
        buff[1] = '_';
      }
      resultArray.push(buff.join(''));
    }
  }

  for (let j = resultArray.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (resultArray[i] > resultArray[i + 1]) {
        let temp = resultArray[i];
        resultArray[i] = resultArray[i + 1];
        resultArray[i + 1] = temp;
      }
    }
  }

  return resultArray;
}

fragmentationString(string);