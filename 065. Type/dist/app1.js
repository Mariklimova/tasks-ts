// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const arr_1 = [1, 223, 34, 5];
let sum = 0;
for (let i = 0; i < arr_1.length; i++) {
    if (arr_1[i] % 2 != 0) {
        sum += arr_1[i];
    }
}
console.log(sum);
