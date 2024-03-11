// 6. Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.

const numbers = [1, 2, 4, 5, 6]

function findMissingNumber(numbers: number[]): number {
    try {
        let resNum:number = 0
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] !== numbers[i - 1] + 1) {
                resNum = numbers[i] - 1
            }

        }
        return resNum
    } catch (error) {
        return error.message
    }
}




