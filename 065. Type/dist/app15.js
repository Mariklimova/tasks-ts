// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const arr_15 = ['hschool', 'company'];
const res_15 = [];
arr_15.forEach(function (el) {
    console.log('!' + el);
});
