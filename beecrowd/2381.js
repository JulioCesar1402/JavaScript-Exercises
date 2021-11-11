// Copie o texto a seguir no arquivo text.txt
/*
5 1

maria

joao

carlos

vanessa

jose
*/
// Não esqueça de mudar o arquivo no package.json

const input = require('fs').readFileSync('./beecrowd/text.txt', 'utf8');

const lines = input.split('\n');

lines.sort();

const linesWithSpace = lines.filter((name) => name !== '');

const linesData = linesWithSpace[0].split(' ');
const sortedStudent = Number(linesData[1]);

console.log(linesWithSpace[sortedStudent]);
