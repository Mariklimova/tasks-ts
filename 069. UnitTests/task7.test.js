// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

function doubleObjNum(obj) {
    try {
        if (Object.keys(obj).length == 0) throw new Error('the object has no data');
        for (const key in obj) {
            if (typeof obj[key] == 'number') obj[key] = obj[key] * 2;
        }
        return obj

    } catch (error) {
        return error.message
    }
}

describe('test doubleObjNum', () => {
    test('true', () => {

        const obj = {
            id: 1,
            name: 'Ivan',
            age: 20,
            group_number: 3
        }

        const result = doubleObjNum(obj);
        expect(result).toEqual({ id: 2, name: 'Ivan', age: 40, group_number: 6 });
    });

    test('true', () => {

        const obj = {
            name: 'Ivan',
            surname: 'Ivanov'
        }

        const result = doubleObjNum(obj);
        expect(result).toEqual({ name: 'Ivan', surname: 'Ivanov' });
    });

    test('false', () => {

        const result = doubleObjNum({});
        expect(result).toBe('the object has no data');
    });
})

