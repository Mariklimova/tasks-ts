// 10. Создайте класс PersonArray, который имеет свойство array (массив объектов
//     Person) и методы:
//     getNames(): string[] - возвращает массив имен всех людей.
//     getAdults(): Person[] - возвращает массив только совершеннолетних людей.
//     getAverageAge(): number - возвращает средний возраст всех людей.

interface iArray_10 {
    name: string;
    age: number;
}
interface iPersonArray {
    array: iArray_10[];
    getNames(): string[];
    getAdults(): iArray_10[];
    getAverageAge(): number;
}

class PersonArray implements iPersonArray {
    array: iArray_10[] = [{ name: 'Ivan', age: 20 }, { name: 'Peter', age: 17 }, { name: 'Sidor', age: 22 }]

    getNames(): string[] {
        let arrNames: string[] = []
        for (let i = 0; i < this.array.length; i++) {
            arrNames.push(this.array[i].name)
        }
        return arrNames
    }

    getAdults(): iArray_10[] {
        return this.array.filter((el) => el.age >= 18)

    }

    getAverageAge(): number {
        return Math.round(this.array.reduce((sum, el) => sum += el.age, 0) / this.array.length);

    }

}

describe('test PersonArray', () => {
    test('correct getNames', () => {
        const personArray = new PersonArray();
        const res = personArray.getNames();
        expect(res).toEqual(['Ivan', 'Peter', 'Sidor']);

    });

    test('correct getAdults', () => {
        const personArray = new PersonArray();
        const res = personArray.getAdults();
        expect(res).toEqual([{ name: 'Ivan', age: 20 }, { name: 'Sidor', age: 22 }]);
        expect(res.length).toBeGreaterThanOrEqual(0);
    })
    test('correct getAverageAge', () => {
        const personArray = new PersonArray();
        const res = personArray.getAverageAge();
        expect(res).toEqual(20);

    })
})