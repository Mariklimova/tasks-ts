// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]


const arr_15: string[] = ['hschool', 'company'];
let res_15: string[] = []

arr_15.forEach(function (el) {
    res_15 += '!' + el;


})
console.log(res_15);
