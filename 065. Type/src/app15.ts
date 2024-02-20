// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]


const arr_15: string[] = ['hschool', 'company'];
const res_15: string[] = []

// 1
// arr_15.forEach(function (el) {
//     res_15.push( '!' + el);
// })
// console.log(res_15);



// 2
// const res_155 = arr_15.map(function(el){
//     return '!' + el
// })
// console.log(res_155);


const res_155 = arr_15.map((el)=> '!' + el)
console.log(res_155);

