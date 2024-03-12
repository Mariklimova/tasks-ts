// 11. Создайте класс StringManipulator, который имеет свойство text (строка) и методы:
// getCharacterCount(): number - возвращает количество символов в тексте.
// getWords(): string[] - возвращает массив слов из текста.
// getReversedText(): string - возвращает текст в обратном порядке.


interface iStringManipulator {
    text: string;
    getCharacterCount(): number;
    getWords(): string[];
    getReversedText(): string;
}

class StringManipulator implements iStringManipulator {
    constructor(text: string) {
        this.text = text;

    }
    text: string;
    getCharacterCount(): number {
        return this.text.length;
    }
    getWords(): string[] {
        return this.text.split(' ')
    }
    getReversedText(): string {
        return this.text.split('').reverse().join('')
    }
}
const stringManipulator = new StringManipulator('gvcfcg dftty rrtury');

describe('test StringManipulator', () => {
    test('corrected getCharacterCount', () => {
        const res = stringManipulator.getCharacterCount()
        expect(res).toBe(19)
    });

    test('corrected  getWords', () => {
        const res = stringManipulator.getWords()
        expect(res).toEqual(['gvcfcg', 'dftty', 'rrtury'])
    })

    test('corrected getReversedText', () => {
        const res = stringManipulator.getReversedText()
        expect(res).toBe('yrutrr yttfd gcfcvg')
    })
})
