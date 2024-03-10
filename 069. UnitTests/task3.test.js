// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function doSum(arr) {
    try {
        if (!arr) throw new Error('not data');
        if (!arr.length) throw new Error('the array is empty');
        for (const el of arr) {
            if (typeof el != 'number') throw new Error('the elements of the array is not a number');
        }
        return arr.reduce((sum, el) => sum + el, 0);

    } catch (error) {
        return error.message
    }
}

describe('test doSum', () => {
    test('true', () => {
        const arr = [1, 2, 3, 4, 5]
        const res = doSum(arr);
        expect(res).toBe(15)
    })

    test('false', () => {
        const res = doSum();
        expect(res).toBe('not data');
    })

    test('false', () => {
        const arr = []
        const res = doSum(arr);
        expect(res).toBe('the array is empty')
    })

    test('false', () => {
        const arr = [1, '2', 3, 4, 5]
        const res = doSum(arr);
        expect(res).toBe('the elements of the array is not a number')
    })
})