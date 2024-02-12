// 15. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d"
const str_15 = 'Hello World'.trim();
let resStr_15 = '';
const newStr_15 = str_15.split('').reverse().join('');
console.log(newStr_15);
for (let i = 0; i < newStr_15.length; i++) {
    console.log(newStr_15[i][i][0]);
    // const index = str_15.lastIndexOf(' ') - 1;
    // const index = str_15.lastIndexOf(str_15[i][i]);
    // console.log(index);
    // resStr_15 +=newStr_15[0][0]
}
// console.log(str_15);
// console.log(resStr_15);
