// 9. Создайте интерфейс iPwd, который описывает метод showPwd. Реализуйте класс Pwd, который
// будет содержать метод showPwd, возвращающий случайно сгенерированный пароль из 8 цифр.
// Создайте класс Validation, который наследуется от Pwd и переопределяет метод showPwd,
// вызывая метод родительского класса через super и дополняя его выводом результата в консоль.

interface iPwd {
    showPwd(): string
}

class Pwd_26 {

    showPwd(): string {
        let password: string = '';
        for (let i = 0; i < 8; i++) {
            password += Math.floor(Math.random() * 9)
        }
        return password
    }
}

class Validation_26 extends Pwd_26 {
    override showPwd(): string {
        return super.showPwd()
    }
}

const validation_26 = new Validation_26();
console.log(validation_26.showPwd());

