// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)


interface Books_20 {
    id: number,
    author: string,
    title: string,
    price: number,
    count: number
}

const objArr_20: Books_20[] = [
    { id: 1, author: 'Толстой', title: 'Война и мир', price: 25, count: 400 },
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита', price: 55, count: 200 },
    { id: 3, author: 'Оруэлл', title: 'Да здравствует фикус!', price: 100, count: 100 }
]
let maxCount: number = 0
const res_20 = objArr_20.filter((el) => {
    if (el.count > maxCount) return maxCount = el.count
})

console.log(res_20);