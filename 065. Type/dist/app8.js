// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const arr8 = ['aha', 'ANaA', 'kasak', 'ghf'];
const res8 = arr8.some(function (el) {
    if (el.split('').reverse().join('') == el) {
        return true;
    }
    else {
        return false;
    }
});
console.log(res8);
