// 12. Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.


const str_12: string = 'hello';

const vowels: string[] = ['e', 'i', 'o', 'a', 'y'];

let newStr: string = '';
let i: number = 0;

while (i < str_12.length) {
    if (vowels.includes(str_12[i])) newStr += '*';
    else newStr += str_12[i];

    i++
}

console.log(newStr);
