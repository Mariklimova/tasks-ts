// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.
const arr_21 = 'dsdvs qfrwte5yruryity zv jlkllk asfasfavf'.split(' ');
// 1
let max_21 = arr_21[0].length;
arr_21.forEach(function (el) {
    if (el.length >= max_21) {
        max_21 = el.length;
    }
});
console.log(max_21);
