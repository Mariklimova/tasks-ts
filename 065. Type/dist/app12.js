// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
const num_12 = +prompt();
const arr_12 = [];
for (let i = 0; i < num_12; i++) {
    arr_12.push(prompt());
}
const res_12 = arr_12.filter(function (el) {
    return el % 2 == 0;
});
