// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование


function f(num1: number, num2?):Function {
  if (num1 && num2) {
    return num1 + num2;
  } else if (!num2) {
    return function (num2:number) {
      return num1 + num2;
    }
  }
}

let res_10 = f((2), (3));
let res_11 = f(2, 3);
console.log(res_10);
console.log(res_11);






