// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const arr_1 = [1, 223, 34, 5];
let sum = 0;
// 1
// for (let i = 0; i < arr_1.length; i++) {
//     if (arr_1[i] % 2 != 0) sum += arr_1[i];
// }
// console.log(sum);
// 2
const result = arr_1.filter((el) => el % 2 !== 0).reduce((sum_2, el) => sum_2 += el, 0);
console.log(result);
