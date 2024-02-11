// 13. Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".
const sentence = prompt().split(' ');
let resStr = '';
for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    let resWord = word[0].toUpperCase() + word.slice(1, word.length);
    resStr += resWord + ' ';
}
console.log(resStr.trim());
