// 10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console.
class Pwd {
    showPwd() {
        let password = '';
        for (let i = 0; i < 8; i++) {
            password += Math.floor(Math.random() * 9);
        }
        return password;
    }
}
class Validation_10 extends Pwd {
    showPwd() {
        return super.showPwd();
    }
}
const validation_10 = new Validation_10();
console.log(validation_10.showPwd());
