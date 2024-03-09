// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.


function calculateFactorial(n?: any): number {
    try {
        if (!n) throw new Error('n not found');
        if (typeof n != 'number') throw new Error('n not number');
        if (n < 0) throw new Error('n < 0');

        if (n <= 1) return 1;
        return n * calculateFactorial(n - 1);

    } catch (error) {
        return error.message
    }
}

describe('test calculateFactorial', () => {
    test('true', () => {
        const res = calculateFactorial(2);
        expect(res).toBe(2)
    })

    test('false', () => {
        const res = calculateFactorial();
        expect(res).toBe('n not found')
    })

    test('false', () => {
        const res = calculateFactorial('2');
        expect(res).toBe('n not number')
    })

    test('false', () => {
        const res = calculateFactorial(-2);
        expect(res).toBe('n < 0')
    })
})