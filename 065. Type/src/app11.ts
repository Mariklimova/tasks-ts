// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

const n_: number = +prompt();
const arr: string[] = []

for (let i = 0; i < n_; i++) {
    arr.push(prompt())

}

const res_11 = arr.every(function (el) {
    if (/^[\w\_\-\.]+\@[a-z]+\.[a-z]{0,5}/gm.test(el)) return true
    else return false
})
console.log(res_11);

