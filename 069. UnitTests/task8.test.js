// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции


function getObj(obj) {
    try {
        let arr = [];
        for (const key in obj) {
            if (obj[key] % 2 == 0) arr.push(obj[key]);
        }
        return arr
    } catch (error) {
        return error.message
    }
}

describe('test getObj', () => {
    test('true', () => {

        const obj = {
            id: 2,
            name: 'Ivan',
            surname: 'Ivanov',
            age: 20,
            group_number: 3
        }

        const result = getObj(obj);
        expect(result).toEqual([2, 20])
    })

    test('true', () => {

        const obj = {
            id: 1,
            name: 'Ivan',
            surname: 'Ivanov',
            age: 21,
            group_number: 3
        }

        const result = getObj(obj);
        expect(result).toEqual([])
    })

})