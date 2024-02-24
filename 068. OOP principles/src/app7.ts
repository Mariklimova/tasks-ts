// 7. Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics


// 1
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
             const vow: string[] = ['a', 'e', 'i', 'o', 'u']
        // let vowCount = 0
        // for (let i = 0; i < this.str.length; i++) {
        //     if (vow.includes(this.str[i])) {
        //         vowCount++
        //     }
        // }
        // return vowCount
        const res = this.str.split('').filter(function (el:string) {
           return (vow.includes(el))       
        })
        return res.length

    }
}
const stringManipulator = new StringManipulator()
console.log(stringManipulator.reverseString());
console.log(stringManipulator.isPalindrome());
console.log(stringManipulator.countVowels());


// 2
// class StringManipulator {
//     str: string;

//     setStr<Type>(str: Type) {
//         if (typeof str === "string") {
//             this.str = str;
//         }
//     }

//     reverseString() {
//         return this.str.split('').reverse().join('')
//     }
//     isPalindrome() {
//         if (this.str === this.str.split('').reverse().join('')) {
//             return 'polindrom';

//         } else {
//             return 'nepolindrom';
//         }
//     }
//     countVowels() {
//         const arr: string[] = this.str.split('')


//         const vow: string[] = ['a', 'e', 'i', 'o', 'u']
//         let vowCount = 0
//         for (let i = 0; i < this.str.length; i++) {
//             if (vow.includes(this.str[i])) {
//                 vowCount++
//             }
//         }
//         return vowCount

//     }
// }
// const stringManipulator = new StringManipulator();
// stringManipulator.setStr<string>('ghtfhjjjooovhyfre');
// console.log(stringManipulator.reverseString());
// console.log(stringManipulator.isPalindrome());
// console.log(stringManipulator.countVowels());
