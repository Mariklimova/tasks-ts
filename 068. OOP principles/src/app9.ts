// 9. Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку


// 1
interface iValidation {
    email: string,
    date: string,
    pwd: string
    isValidEmail(): boolean,
    isValidDate(): boolean,
    isValidPath(): boolean
}
// class Validation {
//     email: string;
//     date: string;
//     pwd: string;

//     constructor(email:string, date:string, pwd:string) {
//         this.email = email;
//         this.date = date;
//         this.pwd = pwd;

//     }
//     isValidEmail(): boolean {
//         if (/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(this.email)) return true
//         else return false
//     }
//     isValidDate(): boolean {
//         if (/^[0-9]+\.[0-9]+\.[0-9]{4}$/gm.test(this.date)) return true
//         else return false
//     }
//     isValidPath(): boolean {
//         if (this.pwd.length >= 8) return true
//         else return false
//     }
// }
// const validation = new Validation('mariku22@yandex.ru','11.12.2013', 'Agata111213')
// console.log(validation.isValidDate());
// console.log(validation.isValidEmail());
// console.log(validation.isValidPath());



// 2
interface iValidation {
    isValidEmail(): boolean,
    isValidDate(): boolean,
    isValidPath(): boolean
}
class Validation{
    email: string;
    date: string;
    pwd: string;

   
    isValidEmail(email:string): boolean {
        if (/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(email)) return true
        else return false
    }
    isValidDate(date:string): boolean {
        if (/^[0-9]+\.[0-9]+\.[0-9]{4}$/gm.test(date)) return true
        else return false
    }
    isValidPath(pwd:string): boolean {
        if (pwd.length >= 8) return true
        else return false
    }
}
const validation = new Validation()
console.log(validation.isValidDate('11.12.2013'));
console.log(validation.isValidEmail('mariku22@yandex.ru'));
console.log(validation.isValidPath('Agata111213'));