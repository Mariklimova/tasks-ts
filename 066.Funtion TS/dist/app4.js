const arr_4 = [{ id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },];
function countResult(arr_4) {
    let counts = 0;
    for (let i = 0; i < arr_4.length; i++) {
        counts += arr_4[i].count * arr_4[i].price;
    }
    return counts;
}
const res_4 = countResult(arr_4);
console.log(res_4);
// 2
const sumCount = arr_4.reduce((sum, el) => {
    return sum += el.count * el.price;
}, 0);
console.log(sumCount);
