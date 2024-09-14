// 11. Создайте класс Counter, который будет представлять счетчик. У класса должно быть:
// • Свойство count, значение которого задается через сеттер.
// • Метод increment — увеличивает значение счётчика на 1.
// • Метод decrement — уменьшает значение счётчика на 1

class Counter_28 {
    count: number;

    setCount(count: number) {
        this.count = count
    }

    increment = (): number => this.count + 1;
    decrement = (): number => this.count - 1;
}

const counter_28 = new Counter_28();
counter_28.setCount(22);

console.log(counter_28.increment());
console.log(counter_28.decrement());

