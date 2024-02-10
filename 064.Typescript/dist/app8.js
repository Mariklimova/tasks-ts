// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.
const str = 'gvjkjkkjvghdr';
let res = '';
for (let i = 0; i < str.length; i++) {
    if ((i - 1) % 2 === 0) {
        res += str[i];
    }
}
console.log(res);
