// 5. Напишите функцию chunkArray(array: any[], size: number): any[][], которая
// принимает массив и число size, и возвращает новый массив, разделенный на
// подмассивы указанного размера.

function chunkArray(array: any[], size: number): any[][] {
    try {

        let newArr: any[] = [];

        if (size === 0) throw new Error('size can not be 0');
        if (!Array.isArray(array)) throw new Error('it is not array');
        if (!array.length) throw new Error('array is empty');
        for (let i = 0; i < array.length; i += size) {
            newArr.push(array.slice(i, i + size))
        }
        return newArr
    } catch (error) {
        return error.message
    }


}

describe('test chunkArray', () => {
    test('true', () => {
        const arr = [1, 2, 3, 4, 5];
        const res = chunkArray(arr, 2);
        expect(res).toEqual([[1, 2], [3, 4], [5]])
    })
})