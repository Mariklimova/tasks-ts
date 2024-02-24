// 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)
const objArr_19 = [
    { id: 1, author: 'Толстой', title: 'Война и мир', price: 25 },
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита', price: 55 },
    { id: 3, author: 'Оруэлл', title: 'Да здравствует фикус!', price: 100 }
];
const res_19 = objArr_19.filter((el) => el.price >= 50);
console.log(res_19);
