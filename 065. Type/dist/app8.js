// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const arr8 = ['aha', 'ANaA', 'kasak', 'ghf'];
// 1
// const res8 = arr8.some(function (el) {
//     if (el.split('').reverse().join('') == el) {
//         return true
//     } else {
//         return false
//     }
// })
// 2
const res8 = arr8.some((el) => el.split('').reverse().join('') == el);
console.log(res8);
