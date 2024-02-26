// 10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console.


interface iPwd {
    showPwd(): string
}

class Pwd {
    showPwd(): string {
        let password: string = '';
        for (let i = 0; i < 8; i++) {
            password += Math.floor(Math.random() * 9)

        }
        return password
    }
}
class Validation_10 extends Pwd {
    override showPwd(): string {
        return super.showPwd()
    }
}
const validation_10 = new Validation_10();
console.log(validation_10.showPwd());
