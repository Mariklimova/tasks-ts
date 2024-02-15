const arr_5 = [{ id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },];
// function findMaxPrice(arr_5:arr[]):arr {
//     let maxPrice = arr_5[0]
//     for (let i = 0; i < arr_5.length; i++) {
//         if(arr_5[i].price>maxPrice.price) 
//         maxPrice = arr_5[i]
//     }
//     return maxPrice
// }
// const res_5 = findMaxPrice(arr_5)
// console.log(res_5);
function findMaxPrice(arr_5) {
    let maxPrice = arr_5[0];
    arr_5.forEach((el) => {
        if (el.price > maxPrice.price) {
            maxPrice = el;
        }
    });
    return maxPrice;
}
const res_5 = findMaxPrice(arr_5);
console.log(res_5);
