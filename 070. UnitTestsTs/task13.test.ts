// Задача состоит в создании класса Words, который имеет поле array, содержащее массив строк (например, ['sun', 'air', 'sky', 'island']), и метод getWordsFstVowels().
//  Этот метод должен вернуть строку, которая является результатом конкатенации всех слов массива, начинающихся с гласной буквы.
//  Массив слов должен быть инициализирован в конструкторе класса.

class Words {
    array: string[];
    constructor(array) {
        this.array = array
    }


    getWordsFstVowels() {
        const vol = ['e', 'i', 'o', 'a', 'u'];
        let newStr = '';
        for (let i = 0; i < this.array.length; i++) {
            if (vol.includes(this.array[i][0])) {
                newStr += this.array[i]
            }

        }
        return newStr
    }
}
const words = new Words(['sun', 'air', 'sky', 'island'])

describe('test Words', () => {
    test('corrected getWordsFstVowels', () => {

        const res = words.getWordsFstVowels()
        expect(res).toBe('airisland')
    });
})



