// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
const n_ = +prompt();
const arr = [];
for (let i = 0; i < n_; i++) {
    arr.push(prompt());
}
// 1
const res_11 = arr.every(function (el) {
    if (/^[\w\_\-\.]+\@[a-z]+\.[a-z]{0,5}/gm.test(el))
        return true;
    else
        return false;
});
console.log(res_11);
// 2
const res_111 = arr.every((el) => /^[\w\_\-\.]+\@[a-z]+\.[a-z]{0,5}/gm.test(el));
console.log(res_111);
