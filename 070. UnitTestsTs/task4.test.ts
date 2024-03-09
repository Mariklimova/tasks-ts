// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.


const flattenArray = (array: any[]): any[] => {
    try {
        if (!array.length) throw new Error('empty array')
        return array.flat(Infinity);

    } catch (error) {
        return error.message
    }
}
describe('test flattenArray', () => {
    test('true', () => {
        const arr = [1, 2, [], [1, 2], [2, []]];
        const arrFlat = flattenArray(arr);
        expect(arrFlat).toEqual([1, 2, 1, 2, 2]);
    });
})