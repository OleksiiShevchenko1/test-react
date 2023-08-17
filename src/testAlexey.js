//Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами, але відсортованими в порядку зростання.
// const arr = [1, -2, 4, 11, 9, 99, 22];

// const sorting = arr => {
//   return arr.sort((a, b) => a - b);
// };

// console.log(sorting(arr));

//Створи функцію, яка приймає масив об'єктів і повертає новий масив, в якому тільки ті об'єкти, властивість "age" яких більше або рівна 18.

// const arr = [
//   { name: 'Alex', age: 34 },
//   { name: 'Stepan', age: 14 },
//   { name: 'John', age: 24 },
//   { name: 'Peter', age: 4 },
//   { name: 'Christian', age: 75 },
// ];
// const ageMoreThan = (arr, age) => {
//   return arr.filter(object => object.age >= age);
// };

// console.log(ageMoreThan(arr, 34));
// console.log(ageMoreThan(arr, 3));
// console.log(ageMoreThan(arr, 21));

//Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.
// const arr = [4, 2, 12];
// const total = arr => {
//   const totalArr = arr.reduce((acc, current) => acc + current, 0) / arr.length;
//   return totalArr;
// };
// console.log(total(arr));

//Створи функцію, яка приймає масив чисел та повертає новий масив, який містить тільки непарні числа з вхідного масиву.

// const arr = [1, 3, 2, 5, 4, 7, 10, 8];

// const newNumbers = arr => {
//   const newAtt = arr.filter(number => number % 2 !== 0);
//   return newAtt;
// };

// console.log(newNumbers(arr));

// Створи функцію, яка приймає масив рядків та повертає новий масив, який містить тільки рядки, що починаються з великої літери.
const arr = ['привіт', 'Допобачення', 'вітаю', 'Надобраніч'];

const stringUpperCase = () => {
  arr.filter(item => item.includes().toLocaleUpperCase);
};
console.log(stringUpperCase);
