// Copie o texto a seguir no arquivo text.txt
/*
22 5 22
*/
// Não esqueça de mudar o arquivo no package.json

const input = require('fs').readFileSync('./beecrowd/text.txt', 'utf8');

const lines = input.split('\n');
const array = lines[0].split(' ');

const n0 = Number(array[0]);
const n1 = Number(array[1]);
const n2 = Number(array[2]);

const SubtractTwoNumber = (op1, op2) => {
  if (op1 - op2 === 0) {
    return true;
  }
  return null;
};

const firstOperation = () => {
  const subtractN0WithN1 = SubtractTwoNumber(n0, n1);
  const subtractN0WithN2 = SubtractTwoNumber(n0, n2);
  const subtractN1WithN2 = SubtractTwoNumber(n1, n2);

  if (subtractN0WithN1) {
    return subtractN0WithN1;
  }

  if (subtractN0WithN2) {
    return subtractN0WithN2;
  }

  if (subtractN1WithN2) {
    return subtractN1WithN2;
  }

  return null;
};

const SubtractThreeNumber = (op1, op2, op3) => {
  if (op1 - op2 - op3 === 0) {
    return true;
  }
  return null;
};

const secondOperation = () => {
  const subtractN0WithN1WithN2 = SubtractThreeNumber(n0, n1, n2);
  const subtractN1WithN0WithN2 = SubtractThreeNumber(n1, n0, n2);
  const subtractN2WithN0WithN1 = SubtractThreeNumber(n2, n0, n1);

  if (subtractN0WithN1WithN2) {
    return subtractN0WithN1WithN2;
  }

  if (subtractN1WithN0WithN2) {
    return subtractN1WithN0WithN2;
  }

  if (subtractN2WithN0WithN1) {
    return subtractN2WithN0WithN1;
  }

  return null;
};

const allOperation = () => {
  let result = 'N';

  const tryFirstOperation = firstOperation();
  const TrySecondOperation = secondOperation();

  if (tryFirstOperation) {
    result = 'S';
  }

  if (TrySecondOperation) {
    result = 'S';
  }

  return result;
};

console.log(allOperation());
