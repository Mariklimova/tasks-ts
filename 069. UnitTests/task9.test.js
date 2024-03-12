//  9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции


function getNewArr(arr, n) {
    try {
        if (typeof n != 'number') throw new Error('An error of data types');
    
        let newArr = [];
        let itemArr = [];
        for (let i = 0; i < arr.length; i++) {
            itemArr.push(arr[i])
            if (itemArr.length == n) {
                newArr.push(itemArr);
                itemArr = [];
            }
        }
        itemArr.length === 0 ? null : newArr.push(itemArr);
        return newArr
        
    } catch (error) {
        return error.message
    }
}


describe('test getNewArr', () => {
    test('true', () => {
        const res = getNewArr([1, 2, 3, 4, 5, 6], 5);
        expect(res).toEqual([[1, 2, 3, 4, 5], [6]])
    })

    test('false', () => {
        const res = getNewArr([1, 2, 3, 4, 5, 6], 'n');
        expect(res).toEqual('An error of data types')
    })
})