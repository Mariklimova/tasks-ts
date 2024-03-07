
// 1. Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции


function doPower(a,b) {
    try {
        if (isNaN(a)|| isNaN(b))  throw new Error('not number');
        if(typeof a !=='number'|| typeof b !=='number') throw new Error('type not number')   
        return a**b
        
    } catch (error) {
        return error.message
    }
}

describe('test doPower',()=>{
    test('true',()=>{
        const result = doPower(2,5);
        expect(result).toBe(32)
    });

    test('false',()=>{
        const result = doPower('3','3');
        expect(result).toBe('type not number')
    });

    test('false2',()=>{
        const result = doPower('gcg','guh');
        expect(result).toBe('not number')
    });
})