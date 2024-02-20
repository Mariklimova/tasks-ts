// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

const num_12: number = +prompt();

const arr_12: number[] = [];

for (let i = 0; i < num_12; i++) {
   arr_12.push(+prompt())

}


// 1
// const res_12 = arr_12.reduce((prev, curr, i) => {
//    return i % 2 === 1 ? prev + curr : prev + 0;
// }, 0)

// console.log(res_12);



// 2
// const res_12 = arr_12.reduce(function (sum, el, i) {
//    if (i % 2 == 0) {
//       return sum += el
//    } else {
//       return sum += 0
//    }
// }, 0)

// console.log(res_12);



// 3
let sum_12: number = 0
for (let i = 0; i < arr_12.length; i += 2) {
   sum_12 += arr_12[i]

}
console.log(sum_12);



