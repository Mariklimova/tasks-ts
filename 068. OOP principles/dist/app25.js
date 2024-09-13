// 8. Создайте класс StringManipulator, который будет иметь три метода:
// • reverseString(str) — разворачивает строку,
// • isPalindrome(str) — проверяет, является ли строка палиндромом,
// • countVowels(str) — подсчитывает количество гласных букв в строке.
// Входные:
// let manipulator = new StringManipulator();
// manipulator.reverseString('hello');
// → Результат: 'olleh
// Входные:
// let manipulator = new StringManipulator();
// manipulator.isPalindrome('madam');
// → Результат: true
class StringManipulator_25 {
    reverseString = (str) => str.split('').reverse().join('');
    isPalindrome = (str) => str === str.split('').reverse().join('') ? true : false;
    countVowels = (str) => {
        const vowels = 'eiyoa';
        return str.split('').filter((el) => vowels.includes(el)).length;
    };
}
const manipulator_25 = new StringManipulator_25();
console.log(manipulator_25.reverseString('hello'));
console.log(manipulator_25.isPalindrome('madam'));
console.log(manipulator_25.countVowels('hello madam'));
