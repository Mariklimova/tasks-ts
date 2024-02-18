// 3. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
const arr_3 = [{ id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },];
// 1
// function doArr(arr_3: arr[]): arr[] {
//     const res_3 = arr_3.filter(function (el) {
//         return (el.count % 3 == 0)
//     })
//     return res_3
// }
// const result_3 = doArr(arr_3)
// console.log(result_3);
// 1b
const doArr = (arr_3) => {
    const res_3 = arr_3.filter(function (el) {
        return (el.count % 3 == 0);
    });
    return res_3;
};
const result_3 = doArr(arr_3);
console.log(result_3);
// 2
// function doArr(arr_3: arr[]):arr[] {
//     let newArr_3 = []
//     arr_3.forEach(function (el) {
//         if (el.count % 3 == 0) {
//             newArr_3.push(el)
//         }
//     })
//     return newArr_3
// }
// const result_3 = doArr(arr_3)
// console.log(result_3);
// 2b
// const doArr = (arr_3: arr[]): arr[] =>{
//     let newArr_3 = []
//     arr_3.forEach(function (el) {
//         if (el.count % 3 == 0) {
//             newArr_3.push(el)
//         }
//     })
//     return newArr_3
// }
// const result_3 = doArr(arr_3)
// console.log(result_3);
