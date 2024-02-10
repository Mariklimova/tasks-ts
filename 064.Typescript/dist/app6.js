// 6. Напишите программу, которая проверяет, является ли заданная строка
// палиндромом.
const polindrom = prompt();
if (polindrom.split('').reverse().join('') === polindrom) {
    console.log(`${polindrom} - polindrom`);
}
else {
    console.log(`${polindrom} - ne polindrom`);
}
