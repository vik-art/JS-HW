/*const numbers = [10, 38, 71, 1, 930, 29, 30];
let smallestNumber = numbers[0];
for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(smallestNumber);*/
const string = 'JavAsCripT';
let inverse = '';
const letters = string.split(' ');
for (const letter of letters) {
  inverse +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(inverse);
