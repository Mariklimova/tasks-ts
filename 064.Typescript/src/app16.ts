// 16. На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 4 –>****
// ***
// **
// *


const n: number = 4;

for (let i = n; i >= 0; i--) {
    console.log('*'.repeat(i));

}