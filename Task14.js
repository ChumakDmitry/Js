console.log(`Даны две строки. Напишите функцию, которая определит, содержится ли меньшая по длине строка в большей.`);

const checkIncludeds = (stringHead, string) => {
  if (stringHead.length < 1 || string.length < 1) {
    return "Error";
  }

  let stringLowerCase = string.toLowerCase();
  let stringHeadLowerCase = stringHead.toLowerCase();

  if (stringLowerCase > stringHeadLowerCase) {
    const temp = stringLowerCase;
    stringLowerCase = stringHeadLowerCase;
    stringHeadLowerCase = temp;
  }

  for (let i = 0; i < stringHeadLowerCase.length; i++) {
    let count = 0;

    for (let j = 0; j < stringLowerCase.length; j++) {
      if (stringHeadLowerCase[i + j] !== stringLowerCase[j]) {
        break;
      }
      count++;
    }

    if (count === stringLowerCase.length) {
      return 'true';
    }
  }

  return 'false';
}

const headString = "text education part 2";
const includesString = "art";

checkIncludeds(headString, includesString);