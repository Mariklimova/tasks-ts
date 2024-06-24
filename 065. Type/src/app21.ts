// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

const arr_21: string[] = 'dsdvs qfrwte5yruryity zv jlkllk asfasfavf'.split(' ');


let max_21: number = arr_21[0].length;

// 1
// arr_21.forEach(function (el:string) {
//     if (el.length >= max_21) {
//         max_21 = el.length
//     }
// })
// console.log(max_21);


// 2
arr_21.forEach((el:string)=>el.length >= max_21? max_21 = el.length:null)
console.log(max_21);

