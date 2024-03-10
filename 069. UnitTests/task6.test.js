// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество. Добавить необходимые
//     проверки.
// Написать тест для функции

function objCountKey(obj) {
    try {
        if (typeof obj != 'object') throw new Error('typeof data not object');
        if (Object.entries(obj).length == 0) throw new Error('not data');
        return Object.entries(obj).length
    } catch (error) {
        return error.message
    }
}

describe('test objCountKey', () => {
    test('true', () => {

        const obj = {
            id: 1,
            name: 'Ivan',
            surname: 'Ivanov',
            age: 20
        }

        const result = objCountKey(obj);
        expect(result).toBe(4)
    })

    test('false',()=>{
        const result = objCountKey('dfjhiulio');
        expect(result).toBe('typeof data not object')
    })

    test('false',()=>{
        const result = objCountKey({});
        expect(result).toBe('not data')
    })
})