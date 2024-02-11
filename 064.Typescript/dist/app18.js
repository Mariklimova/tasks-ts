// 18. *На вход подается строка чисел произвольной длины. Необходимо обратиться к
// каждому значению числа и выявить четность/нечетность
// 1234 -> 1 неч 2 чет 3 неч 4 чет
// 444444 -> 4 чет 4 чет 4 чет 4 чет 4 чет 4 чет
const strNum = prompt();
let resString = '';
for (let i = 0; i < strNum.length; i++) {
    if (+strNum[i] % 2 == 0) {
        resString += strNum[i] + ' чет ';
    }
    else {
        resString += strNum[i] + ' нечет ';
    }
}
console.log(resString);
