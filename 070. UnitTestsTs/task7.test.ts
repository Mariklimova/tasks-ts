// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.



function findPairWithSum(numbers: number[], targetSum: number): any[] {
    try {
        if (!numbers.length) throw new Error('The array is empty')

        const result: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === targetSum) {
                    result.push(numbers[i], numbers[j]);
                }
            }
        }
        return result;
    } catch (error) {
        return error.message
    }
}

describe('test findMissingNumber', () => {
    test('corrected', () => {
        const numbers = [1, 2, -3, 4, 5, 6];
        const targetSum = 3
        const res = findPairWithSum(numbers, targetSum);
        expect(res).toEqual([1, 2, 2, 1, -3, 6, 6, -3]);
    })

    test('uncorrected', () => {
        const res = findPairWithSum([], 3);
        expect(res).toBe('The array is empty');
    })
})
