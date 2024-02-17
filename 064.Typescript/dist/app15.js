// 15. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d"
const str_15 = 'Hello World rgerhteht aqwrfwewrh'.trim().split(' ');
let resStr_15 = [];
for (let i = 0; i < str_15.length; i++) {
    const lastInd = str_15[i].length - 1;
    resStr_15.push(str_15[i].slice(lastInd));
}
console.log(resStr_15.join(' '));
