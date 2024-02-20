// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
// class Calculator {
//     num1: number;
//     num2: number;
//     constructor(a: number, b: number) {
//         this.num1 = a;
//         this.num2 = b
//     }
//     add() {
//         return this.num1 + this.num2
//     }
//     subtract() {
//         return this.num1 - this.num2
//     }
//     multiply() {
//         return this.num1 * this.num2
//     }
//     divide() {
//         return this.num1 / this.num2
//     }
// }
// const calculator = new Calculator(10, 5)
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());
// class Calculator {
//     num1: number = 10
//     num2: number = 5
//     add() {
//         return this.num1 + this.num2
//     }
//     subtract() {
//         return this.num1 - this.num2
//     }
//     multiply() {
//         return this.num1 * this.num2
//     }
//     divide() {
//         return this.num1 / this.num2
//     }
// }
// const calculator = new Calculator()
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());
// class Calculator {
//         num1: number;
//         num2: number;
//         add() {
//             return this.num1 + this.num2
//         }
//         subtract() {
//             return this.num1 - this.num2
//         }
//         multiply() {
//             return this.num1 * this.num2
//         }
//         divide() {
//             return this.num1 / this.num2
//         }
//     }
//     const calculator = new Calculator()
//     calculator.num1 = 10;
//     calculator.num2 = 5;
//     console.log(calculator.add());
//     console.log(calculator.subtract());
//     console.log(calculator.multiply());
//     console.log(calculator.divide());
class Calculator {
    num1;
    num2;
    setNum1(num1) {
        this.num1 = num1;
    }
    setNum2(num2) {
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    subtract() {
        return this.num1 - this.num2;
    }
    multiply() {
        return this.num1 * this.num2;
    }
    divide() {
        return this.num1 / this.num2;
    }
}
const calculator = new Calculator();
calculator.setNum1(10);
calculator.setNum2(5);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
