// 2. Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции


function makeMultiply(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('typeof a & b not number');
        if (!a || !b) throw new Error('data is not transferred');
        return a * b

    } catch (error) {
        return error.message
    }
}

describe('test makeMultiply', () => {
    test('test successful', () => {
        const result = makeMultiply(2, 5);
        expect(result).toBe(10)
    })

    test('test errors', () => {
        const result_1 = makeMultiply('2', '5');
        expect(result_1).toBe('typeof a & b not number');
    })

    test('test errors', () => {
        const result_2 = makeMultiply(0, 0);
        expect(result_2).toBe('data is not transferred');
    })

})