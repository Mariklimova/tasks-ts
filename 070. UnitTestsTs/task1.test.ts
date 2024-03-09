// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.

function isPalindrome(word: any): boolean | string {
    try {

        if (!word) throw new Error('not data');
        if (typeof word != 'string') throw new Error('not string');
        if (!word.trim().length) throw new Error('empty string');

        return (word == word.split('').reverse().join('')) ? true : false;

    } catch (error) {
        return error.message
    }
}

describe('test isPalindrome', () => {
    test('true', () => {
        const arr = ['потоп', '1221']
        for (const el of arr) {
            const res = isPalindrome(el);

            expect(res).toBe(true)
            expect(res).toBeTruthy();

        }
    })

    test('false', () => {

        const res = isPalindrome('');
        expect(res).toBe('not data');
        
    })
    test('false', () => {

        const res = isPalindrome(55656);
        expect(res).toBe('not string');
        
    })

    test('false', () => {

        const res = isPalindrome(' ');
        expect(res).toBe('empty string');

    })
})
