// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту


const arrMail_8: string[] = ['mariku22@yandex.ru',
    'KlimovA@mail.ru', 'Agata11@mail.ru', 'gfgsgsb45@gmail.com', 'mariku22@yandex.ru'];


function isValid(arrMail_8: string[]) {
    for (let i = 0; i < arrMail_8.length; i++) {
        if (typeof (arrMail_8[i]) !== 'string') throw new Error('does not match the data type')ж


    }
}

function doMailUniq(arrMail_8: string[]) {
    const check = isValid(arrMail_8);
    const filt_8 = arrMail_8.filter(function (el) {
        return el !== el
    })
    return filt_8
}
const res_8 = doMailUniq(arrMail_8);
console.log(res_8);



