// 6. Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.


// 1
// class ArrayAnalyzer {
//     arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

//     getAverage() {
//         return this.arr.reduce((sum, el) => sum + el / this.arr.length,0)
//     }
//     getMax() {
//         return Math.max(...this.arr)
//     }
//     getMin() {
//         return Math.min(...this.arr)

//     }
// }
// const arrayAnalyzer = new ArrayAnalyzer()
// console.log(arrayAnalyzer.getAverage());
// console.log(arrayAnalyzer.getMax());
// console.log(arrayAnalyzer.getMin());


// 2
// class ArrayAnalyzer {
//     arr: number[]

//     getAverage() {
//         return this.arr.reduce((sum, el) => sum + el / this.arr.length,0)
//     }
//     getMax() {
//         return Math.max(...this.arr)
//     }
//     getMin() {
//         return Math.min(...this.arr)

//     }
// }
// const arrayAnalyzer = new ArrayAnalyzer()
// arrayAnalyzer.arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arrayAnalyzer.getAverage());
// console.log(arrayAnalyzer.getMax());
// console.log(arrayAnalyzer.getMin());



// 3
// class ArrayAnalyzer {
//     arr: number[]

//     constructor(array:number[]){
//         this.arr = array
//     }

//     getAverage() {
//         return this.arr.reduce((sum, el) => sum + el / this.arr.length,0)
//     }
//     getMax() {
//         return Math.max(...this.arr)
//     }
//     getMin() {
//         return Math.min(...this.arr)

//     }
// }
// const arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5, 6, 7, 8])

// console.log(arrayAnalyzer.getAverage());
// console.log(arrayAnalyzer.getMax());
// console.log(arrayAnalyzer.getMin());


// 4
// class ArrayAnalyzer {
//     arr: number[]

//     setArr(array:number[]){
//         this.arr = array
//     }

//     getAverage() {
//         return this.arr.reduce((sum, el) => sum + el / this.arr.length,0)
//     }
//     getMax() {
//         return Math.max(...this.arr)
//     }
//     getMin() {
//         return Math.min(...this.arr)

//     }
// }
// const arrayAnalyzer = new ArrayAnalyzer()
// arrayAnalyzer.setArr([1, 2, 3, 4, 5, 6, 7, 8])
// console.log(arrayAnalyzer.getAverage());
// console.log(arrayAnalyzer.getMax());
// console.log(arrayAnalyzer.getMin());



// 5
class ArrayAnalyzer {

    getAverage = (arr: number[]) => arr.reduce((sum, el) => sum + el, 0) / arr.length
    getMax = (arr: number[]) => Math.max(...arr)
    getMin = (arr: number[]) => Math.min(...arr)
}
const arrayAnalyzer = new ArrayAnalyzer()
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arrayAnalyzer.getAverage(arr));
console.log(arrayAnalyzer.getMax(arr));
console.log(arrayAnalyzer.getMin(arr));

