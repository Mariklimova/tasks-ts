// 15. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d"
const str_15 = 'Hello World rgerhteht aqwrfwewrh'.trim().split(' ');
let resStr_15 = '';
for (let i = 0; i < str_15.length; i++) {
    const lastInd = str_15[i].length - 1;
    // const index = str_15.lastIndexOf(' ') - 1;
    // const index = str_15.lastIndexOf(str_15[i][i]);
    // console.log(index);
    resStr_15 += str_15[lastInd] + ' ';
    console.log(lastInd);
}
// console.log(str_15);
console.log(resStr_15);
