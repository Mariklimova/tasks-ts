// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и
// методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
    array: number[] = [1, 2, 3, 4, 5];

    getSum(): number {
        try {
            return this.array.reduce((sum: number, el: number): number => sum + el, 0)
        } catch (error) {
            return error.message
        }
    }

    getEvenNumbers(): number[] {
        try {
            return this.array.filter((el: number): boolean => el % 2 == 0)
        } catch (error) {
            return error.message
        }
    }

}

describe('test NumberArray', () => {
    test('true', () => {
        const numberArray = new NumberArray();
        const result = numberArray.getSum();
        expect(result).toBe(15)
    })

    test('true', () => {
        const numberArray = new NumberArray();
        const result = numberArray.getEvenNumbers();
        expect(result).toEqual([2,4]);
        expect(result.length).toBe(2);

    })
})