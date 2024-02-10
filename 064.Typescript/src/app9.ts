// 9. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo".

const str1: string = 'hello';
let strNew: string = '';

for (let i = 0; i < str1.length; i++) {
    if (!strNew.includes(str1[i])) {
        strNew += str1[i];
    }

}

console.log(strNew);
