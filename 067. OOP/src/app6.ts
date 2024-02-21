// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.

// 1
class Calculator {
    num1: number;
    num2: number;

    constructor(a: number, b: number) {
        this.num1 = a;
        this.num2 = b
    }
    add = () => this.num1 + this.num2;

    subtract = () => this.num1 - this.num2;

    multiply = () => this.num1 * this.num2;

    divide = () => this.num1 / this.num2;
}

const calculator = new Calculator(10, 5)

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());




// 2
// class Calculator {
//     num1: number = 10
//     num2: number = 5

//     add = () => this.num1 + this.num2;

//     subtract = () => this.num1 - this.num2;

//     multiply = () => this.num1 * this.num2;

//     divide = () => this.num1 / this.num2;
// }


// const calculator = new Calculator()

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());



// 3
// class Calculator {
//     num1: number;
//     num2: number;

//     add = () => this.num1 + this.num2;

//     subtract = () => this.num1 - this.num2;

//     multiply = () => this.num1 * this.num2;

//     divide = () => this.num1 / this.num2;
// }

// const calculator = new Calculator()
// calculator.num1 = 10;
// calculator.num2 = 5;

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());



// 4
// class Calculator {
//     num1: number;
//     num2: number;

//     setNum1(num1: number) {
//         this.num1 = num1
//     }
//     setNum2(num2: number) {
//         this.num2 = num2
//     }

//     add = () => this.num1 + this.num2;

//     subtract = () => this.num1 - this.num2;

//     multiply = () => this.num1 * this.num2;

//     divide = () => this.num1 / this.num2
// }

// const calculator = new Calculator()
// calculator.setNum1(10);
// calculator.setNum2(5);

// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());



// 5
// class Calculator {

//     add = (num1: number, num2: number) => num1 + num2;

//     subtract = (num1: number, num2: number) => num1 - num2;

//     multiply = (num1: number, num2: number) => num1 * num2;

//     divide = (num1: number, num2: number) => num1 / num2;
// }

// const calculator = new Calculator()

// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(10, 5));
// console.log(calculator.divide(10, 5));

