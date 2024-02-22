// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {
    str: string = 'hbgjooikokpl'

    reverseString() {
        return this.str.split('').reverse().join('')
    }
    isPalindrome() {
        if (this.str === this.str.split('').reverse().join('')) {
            return 'polindrom';

        } else {
            return 'nepolindrom';
        }
    }
    countVowels() {
        const arr:string[] = this.str.split('')
        console.log(arr);
        
        const vow: string[] = ['a', 'e', 'i', 'o', 'u']
        // let vowCount = 0
        // for (let i = 0; i < this.str.length; i++) {
        //     if (vow.includes(this.str[i])) {
        //         vowCount++
        //     }
        // }
        // return vowCount
        const res = this.str.split('').reduce(function (vowCount:number,el:string) {
            if (vow.includes(el)) return vowCount++           
        },0)
        return res

    }
}
const stringManipulator = new StringManipulator()
console.log(stringManipulator.reverseString());
console.log(stringManipulator.isPalindrome());
console.log(stringManipulator.countVowels());

