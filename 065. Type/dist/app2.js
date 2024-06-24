// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.
const arr_2 = ['sfdeagsf', 'wrfegrg', 'wfwesgsfgfgagrg'];
const res_2 = [];
// 1
for (let i = 0; i < arr_2.length; i++) {
    if (arr_2[i].includes('a')) {
        res_2.push(arr_2[i]);
    }
}
console.log(res_2);
// 2
const result_2 = arr_2.filter(function (el) {
    return el.includes('a');
});
console.log(result_2);
// 3
console.log(arr_2.filter((el) => el.includes('a')));
