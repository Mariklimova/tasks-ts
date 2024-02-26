// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface objBook {
    name: string,
    price: number,
    count: number
}

const arrBook_23: objBook[] =
    [{ name: 'Граф Монте-Кристо', price: 20, count: 100 },
    { name: 'Три мушкетера', price: 30, count: 200 },
    { name: 'Отцы и дети', price: 40, count: 300 },
    { name: 'Пиковая дама', price: 10, count: 400 }]

const res_23: number = arrBook_23.reduce((sum: number, el: objBook) => sum += el.price * el.count, 0)
console.log(res_23);