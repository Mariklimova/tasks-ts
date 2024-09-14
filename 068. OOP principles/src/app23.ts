// 6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
// isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
// Validation должен принимать параметры email, date, path и инициализировать их как поля класса.
// Входные:
// let validation = new Validation('example@mail.com',
// '2023-09-10', '/usr/local/bin');
// validation.isValidEmail();
// → Результат: true
// Входные:
// let validation = new Validation('invalid-email', '2023-09-
// 10', '/usr/local/bin');
// validation.isValidEmail();
// → Результат: false



interface iValidation {
    mail: string,
    date: string,
    path: string
    isValidEmail(): boolean,
    isValidDate(): boolean,
    isValidPath(): boolean
}

class Validation_23 {
    mail: string;
    date: string;
    path: string;

    constructor(mail: string, date: string, path: string) {
        this.mail = mail;
        this.date = date;
        this.path = path;
    }

    isValidEmail = () => /^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(this.mail);
    isValidDate = () => /^\d{4}\-\d{2}\-\d{2}/gm.test(this.date);
    isValidPath = () => /^\/[a-z\/]+/gm.test(this.path);

}
const validation_23 = new Validation_23('example@mail.com', '2023-09-10', '/usr/local/bin');
console.log(validation_23.isValidEmail());
console.log(validation_23.isValidDate());
console.log(validation_23.isValidPath());

