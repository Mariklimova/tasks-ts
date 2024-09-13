// 7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.
// Входные:
// let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);
// analyzer.getAverage();
// → Результат: 3
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMax();
// → Результат: 30
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMin();
// → Результат: 5
class ArrayAnalyzer_24 {
    arr_24;
    constructor(arr_24) {
        this.arr_24 = arr_24;
    }
    getAverage = () => this.arr_24.reduce((sum, el) => sum + el, 0) / this.arr_24.length;
    getMax = () => Math.max(...this.arr_24);
    getMin = () => Math.min(...this.arr_24);
}
const analyzer = new ArrayAnalyzer_24([1, 2, 3, 4, 5]);
console.log(analyzer.getAverage());
const analyzer_2 = new ArrayAnalyzer_24([10, 20, 5, 30, 15]);
console.log(analyzer_2.getMax());
console.log(analyzer_2.getMin());
