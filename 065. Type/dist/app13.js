// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const arr_13 = [1, 2, 3, 4, 5, 6];
const newArr_13 = [];
// 1
// const res_13: string[] = arr_13.map((el) => (el % 2 == 0 ? 'чет' : 'нечет'))
// console.log(res_13);
// 2
// arr_13.forEach(function (el) {
//     if (el % 2 == 0) {
//         newArr_13.push('чет')
//     } else {
//         newArr_13.push('нечет')
//     }
// })
// console.log(newArr_13);
// 3
arr_13.forEach((el) => el % 2 == 0 ? newArr_13.push('чет') : newArr_13.push('нечет'));
console.log(newArr_13);
