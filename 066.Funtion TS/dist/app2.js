// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
const arr_2 = [{ id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },];
// function reverseProducts(arr_2:arr[]):arr[] {
//     return arr_2.reverse()
// }
// const res_2 = reverseProducts(arr_2);
// console.log(res_2);
const reverseProd = (arr_2) => arr_2.reverse();
const res_2 = reverseProd(arr_2);
console.log(res_2);
