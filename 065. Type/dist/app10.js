// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const str10 = ['hello', 'hi', 'world'];
// 1
const res10 = str10.map((el) => {
    return el.split('').filter((l) => {
        return 'aoiue'.includes(l.toLocaleLowerCase());
    }).join('');
});
console.log(res10);
// 2
const res_101 = str10.map((el) => el.split('').filter((l) => 'aoiue'.includes(l.toLocaleLowerCase())).join(''));
console.log(res_101);
