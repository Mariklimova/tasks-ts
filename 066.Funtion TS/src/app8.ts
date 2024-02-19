// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту


const arrMail_8: string[] = ['mariku22@yandex.ru',
    'KlimovA@mail.ru', 'Agata11@mail.ru', 'gfgsgsb45@gmail.com', 'mariku22@yandex.ru'];


function isValid(arrMail_8: string[]) {
    const res = arrMail_8.every(function (elem) {
        if (typeof (elem) != 'string') throw new Error('does not match the data type');
        if (!/^[\w]+@[a-z]+\.[a-z]{2,5}/gm.test(elem)) throw new Error('mail is not valid');
        else return true
    })

    return res
}


function doMailUniq(arrMail_8: string[]) {
    const check = isValid(arrMail_8);
    if (check) {
        const newArr: string[] = []
        arrMail_8.forEach(function (el) {
            if (!newArr.includes(el)) {
                newArr.push(el)
            }
        })

        return newArr

    } else {
        return 'error';
    }
}
const res_8 = doMailUniq(arrMail_8);
console.log(res_8);



