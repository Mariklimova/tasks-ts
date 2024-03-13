// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.



function findPairWithSum(numbers: number[], targetSum: number): any {
    try {
        if (!numbers.length) throw new Error('The array is empty')
        const result: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === targetSum) {
                    result.push([numbers[i], numbers[j]]);
                }
            }
        }


    } catch (error) {
        return error.message
    }
}
const res = findPairWithSum([1, 2, -3, 4, 5, 6], 3);
console.log(res);




// const numbers = [1, 2, -3, 4, 5, 6]
// const sum = 3

// const result = [];

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] + numbers[j] === sum) {
//             result.push([numbers[i], numbers[j]]);
//         }
//     }
// }

// console.log(result);
