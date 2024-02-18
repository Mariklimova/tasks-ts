// 9. Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}


interface arr9 {
    name: string;
    value: number
}

interface obj9 {
    width?: number,
    height?: number
}


const arr_9: arr9[] = [{ name: 'width', value: 10 },
{ name: 'height', value: 20 }];

const obj_9: obj9 = {}

function doObject(arr_9: arr9[]) {
    arr_9.forEach(function (el) {
        el.value = obj_9[el.name]
    })
    return obj_9
}
const res_9 = doObject(arr_9);
console.log(res_9);
