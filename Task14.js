console.log(`Даны две строки. Напишите функцию, которая определит, содержится ли меньшая по длине строка в большей.`);

const checkIncludeds = (stringHead, string) => {
  if (stringHead.length < 1 || string.length < 1 || stringHead.length < string.length) {
    return "Error";
  }

  string = string.toLowerCase();
  stringHead = stringHead.toLowerCase();

  for (let i = 0; i < stringHead.length; i++) {
    let count = 0;

    for (let j = 0; j < string.length; j++) {
      if (stringHead[i + j] !== string[j]) {
        break;
      }
      
      count++;
    }

    if (count === string.length) {
      return ('true');
    }
  }

  return ('false');
}

const headString = "text education part 2";
const includesString = "art";

checkIncludeds(headString, includesString);