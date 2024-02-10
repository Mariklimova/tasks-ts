// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль
const num_7 = +prompt();
let fact = 1;
for (let i = 1; i <= num_7; i++) {
    fact *= i;
}
console.log(fact);
