// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.

const num_6: number = +prompt();
const arr_6: string[] = [];

for (let i = 0; i < num_6; i++) {
    arr_6.push(prompt())

}

const res_6Str = arr_6.join('')
console.log(res_6Str);
