// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.


function capitalizeString(str:string):string {
    try {
        if (!str) throw new Error('not data');
        
        const arr: string[] = str.split(' ');
        const newArr: string[] = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        }
        return newArr.join(' ')
    } catch (error: any) {
        return error.message
    }
}

describe('test capitalizeString',()=>{
    test('true',()=>{
        const str = 'hjikj juiko opiiy sedr';
        const res = capitalizeString(str);
        expect(res).toBe('Hjikj Juiko Opiiy Sedr')

    })
})
