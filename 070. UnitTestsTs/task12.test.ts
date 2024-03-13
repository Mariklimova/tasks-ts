// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции


function uniqueStrArr(str: string): string[] {
    try {
        const newArr: any[] = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[i + 1]) {
                newArr.push(str[i]);
            }
        }
        return newArr
    } catch (error) {
        return error.message
    }
}

describe('test uniqueStrArr', () => {
    test('corrected uniqueStrArr', () => {
       const str = 'AAAABBBCCDAABBB'
        const res = uniqueStrArr(str);        
        expect(res).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
    });
})

