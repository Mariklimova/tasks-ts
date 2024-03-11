// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

function getNewArr(str) {
    try {
        if (typeof str != 'string') throw new Error('str not string')
        const resArr = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] != str[i + 1]) resArr.push(str[i])
        }
        return resArr
    } catch (error) {
        return error.message
    }
}

describe('test getNewArr', () => {
    test('true', () => {
        const str = 'ABBCcAD'
        const res = getNewArr(str);
        expect(res).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
        expect(res).toHaveLength(6);
    })

    test('false', () => {
        const str = 12233
        const res = getNewArr(str);
        expect(res).toBe('str not string');
    })
})
