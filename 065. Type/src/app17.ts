// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

const arr_17: number[] = [1, 10, 5, 2, 18];

// let max: number = 0;
// let min: number = arr_17[0];
// for (let i = 0; i < arr_17.length; i++) {
//     if (arr_17[i] > max) {
//         max = arr_17[i]
//     } else if (arr_17[i] < min) {
//         min = arr_17[i]
//     }
// }
// console.log(max - min);



// 2
const max: number = Math.max(...arr_17);
const min: number = Math.min(...arr_17);


console.log(max - min);


// 3
// const max: number = Math.max.apply(null, arr_17);
// const min: number = Math.min.apply(null, arr_17);

// console.log(max - min);


