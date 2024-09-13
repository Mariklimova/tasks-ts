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
    isValidEmail()
    isValidDate()
    isValidPath()
}