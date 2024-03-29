// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением


interface arr {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const arr_7: arr[] = [{ id: 1, title: 'Часы', count: 10, price: 500 },
{ id: 2, title: 'Смартфон', count: 33, price: 1500 },
{ id: 3, title: 'Моноблок', count: 6, price: 2200 },
{ id: 4, title: 'Ноутбук', count: 13, price: 3000 },
{ id: 5, title: 'Планшет', count: 22, price: 2100 },]

function isMax(arr_7: arr[]) {
    let max: number = 0;
    let maxProdId: number = 0;
    arr_7.forEach(function (el) {
        if (el.count * el.price > max) {
            maxProdId = el.id;
        }
    })
    const res_7 = arr_7.filter(function (el) {
        return (el.id == maxProdId)
    })
    return res_7
}
const result_7 = isMax(arr_7)
console.log(result_7);

