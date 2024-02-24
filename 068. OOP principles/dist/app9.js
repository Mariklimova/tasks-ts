// 9. Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку
class Validation {
    email;
    date;
    pwd;
    isValidEmail(email) {
        if (/^[\w]+\@[a-z]+\.[a-z]{2,5}$/gm.test(email))
            return true;
        else
            return false;
    }
    isValidDate(date) {
        if (/^[0-9]+\.[0-9]+\.[0-9]{4}$/gm.test(date))
            return true;
        else
            return false;
    }
    isValidPath(pwd) {
        if (pwd.length >= 8)
            return true;
        else
            return false;
    }
}
const validation = new Validation();
console.log(validation.isValidDate('11.12.2013'));
console.log(validation.isValidEmail('mariku22@yandex.ru'));
console.log(validation.isValidPath('Agata111213'));
