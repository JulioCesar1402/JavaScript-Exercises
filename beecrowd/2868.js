// Copie o texto a seguir no arquivo text.txt
/*
3
7 + 6 = 10
7 x 6 = 50
7 - 6 = 5
*/
// Não esqueça de mudar o arquivo no package.json

const input = require('fs').readFileSync('./beecrowd/text.txt', 'utf8');

const lines = input.split('\n');
lines.shift();

const whichOperationDo = (n1, mathSign, n2) => {
  switch (mathSign) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case 'x':
      return n1 * n2;
    default:
      return null;
  }
};

/*
  source for the Math.abs:
  https://www.geeksforgeeks.org/convert-a-negative-number-to-positive-in-javascript/

  source for the Array.join(''):
  https://atomizedobjects.com/blog/javascript/how-to-convert-an-array-into-a-string-in-javascript/
*/

const discoverIfItsWrong = (resultInserted, resultFromOperation) => {
  const middle = [];
  const response = Math.abs(resultInserted - resultFromOperation);
  for (let index2 = 0; index2 < response; index2 += 1) {
    middle[index2] = 'r';
  }
  return middle;
};

const joinLetters = (rQuantity) => {
  const begin = ['E'];
  const end = ['ou!'];
  if (rQuantity.length !== 0) {
    const result = [...begin, ...rQuantity, ...end];
    return console.log(result.join(''));
  }
  return null;
};

const consoleLogErro = (index) => {
    const mathAccount = lines[index].split(' ');

    const n1 = Number(mathAccount[0]);
    const mathSign = mathAccount[1];
    const n2 = Number(mathAccount[2]);
    const resultInserted = mathAccount[4];

    const resultFromOperation = whichOperationDo(n1, mathSign, n2);

    const rQuantity = discoverIfItsWrong(resultInserted, resultFromOperation);
    if (resultInserted !== resultFromOperation) {
      return joinLetters(rQuantity);
    }
};

for (let index = 0; index < lines.length; index += 1) {
  consoleLogErro(index);
}
