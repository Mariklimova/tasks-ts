// 8. Создайте класс StringArray, который имеет свойство array (массив строк) и методы:
// getLongestWord(): string - возвращает самое длинное слово из массива.
// getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
    array: string[] = ['ghy', 'cghvj', 'fcghcmjhvjk', 'cghvj'];

    getLongestWord(): string {
        let findLength: number = 0;
        let word: string = '';
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i].length > findLength) {
                findLength = this.array[i].length
                word = this.array[i];
            }
        }
        return word;
    }

    getUniqueWords(): string[] {
        let uniqueWords: string[] = [];
        for (let i = 0; i < this.array.length; i++) {
            if (!uniqueWords.includes(this.array[i])) {
                uniqueWords.push(this.array[i])
            }
        }
        return uniqueWords
    }
}
const stringArray = new StringArray()

describe('test StringArray', () => {
    test('corrected getLongestWord', () => {
        const result = stringArray.getLongestWord();
        expect(result).toBe('fcghcmjhvjk')
    })

    test('corrected ', () => {
        const result = stringArray.getUniqueWords();
        expect(result).toEqual(['ghy', 'cghvj', 'fcghcmjhvjk']);
        expect(result.length).toBe(3);

    });
})