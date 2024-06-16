// 10. Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.
const firstStr = 'muka', secondStr = 'kuma';
// if (firstStr.split('').sort().join('') == secondStr.split('').sort().join('')) {
//     console.log('анаграмма');
// } else {
//     console.log('не анаграмма');
// }
console.log(firstStr.split('').sort().join('') == secondStr.split('').sort().join('') ? 'анаграмма' : 'не анаграмма');
