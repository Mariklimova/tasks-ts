// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

const arr9: (string | number)[] = [1, 'df', 5, 'fv', 2, 1];


const res9 = arr9.filter((el, index, array) => {
    return array.indexOf(el) == index
})

console.log(res9);
