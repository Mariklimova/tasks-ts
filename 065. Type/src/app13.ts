// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const arr_13:number[] = [1, 2, 3, 4, 5, 6];

const res_13: string[] = arr_13.map((el)=>(el%2==0?'чет':'нечет'))

console.log(res_13);


