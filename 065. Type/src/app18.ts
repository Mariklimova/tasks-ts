// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)


interface Books18 {
    id: number,
    author: string,
    title: string
}

const objArr: Books18[] = [
    { id: 1, author: 'Толстой', title: 'Война и мир' },
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита' },
    { id: 3, author: 'Оруэлл', title: 'Скотный двор' }
]

const resBook = objArr.filter((el) =>el.author == 'Булгаков')

console.log(resBook);
