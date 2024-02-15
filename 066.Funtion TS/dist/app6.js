// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов
const arr_6 = [{ id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },];
const averagePrice = (arr_6) => arr_6.reduce((sum, el) => sum + el.price, 0) / arr_6.length;
const result_6 = averagePrice(arr_6);
console.log(result_6);
