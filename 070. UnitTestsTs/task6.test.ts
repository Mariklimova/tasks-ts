// 6. Напишите функцию findMissingNumber(numbers: number[]): number, которая
// принимает массив чисел, в котором пропущено одно число из
// последовательности, и возвращает пропущенное число.


function findMissingNumber(numbers: number[]): number {
    try {
        if (!numbers.length) throw new Error('The array is empty');
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

describe('test findMissingNumber',()=>{
    test('true',()=>{
        const numbers = [1, 2, 4, 5, 6];
        const res = findMissingNumber(numbers);
        expect(res).toBe(3);
    })

    test('false',()=>{
        const res = findMissingNumber([]);
        expect(res).toBe('The array is empty');
    })
})




