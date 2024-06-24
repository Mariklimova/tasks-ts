// 18. *На вход подается строка чисел произвольной длины. Необходимо обратиться к
// каждому значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет


const strNum: string = prompt();
let resString: string = '';

// 1
// for (let i = 0; i < strNum.length; i++) {
//     if (+strNum[i] % 2 == 0) {
//         resString += strNum[i] + ' чет ';
//     } else {
//         resString += strNum[i] + ' нечет ';
//     }
// }
// console.log(resString);

// 1b
for (let i = 0; i < strNum.length; i++) {
    +strNum[i] % 2 == 0 ? resString += strNum[i] + ' чет ' : resString += strNum[i] + ' нечет ';
}
console.log(resString);


// 2
const res_18:string[] = strNum.split('').map((el:string) => +el % 2 === 0 ? el + ' чет ' : el + ' нечет ');
console.log(res_18.join(''));


