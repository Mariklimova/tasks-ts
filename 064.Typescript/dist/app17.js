// 17. *Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. Проверьте есть ли в массиве элемент
// со значением, равным 4. Посчитать количество повторений числа 4 в массиве
const arr_17 = [1, 2, 5, 9, 4, 13, 4, 10];
let numRepet = 0;
// 1
for (let i = 0; i < arr_17.length; i++) {
    if (arr_17[i] === 4)
        numRepet++;
}
console.log(numRepet);
// 2
const res_17 = arr_17.filter((el) => el === 4).length;
console.log(res_17);
