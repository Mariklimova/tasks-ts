// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 
const arr7 = [];
for (let i = 0; i < 6; i++) {
    arr7.push(prompt());
}
// 1
// const res7 = arr7.map(el => {
//   return Number(el)
// }).filter((el) => {
//   return !isNaN(el)
// });
// console.log(res7);
// 2
const res7 = arr7.map(el => Number(el)).filter((el) => !isNaN(el));
console.log(res7);
