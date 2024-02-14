// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке


const str_14: string = 'vejfhrhgirrrrrr';

const obj_14 = {}

for (let i = 0; i < str_14.length; i++) {
    if (obj_14.hasOwnProperty(str_14[i])) {
        obj_14[str_14[i]]++
    } else {
        obj_14[str_14[i]] = 1
    }

}
console.log(obj_14);
