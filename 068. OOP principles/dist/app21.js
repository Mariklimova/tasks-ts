// 4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
// метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
// (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
// реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
// транспортных средств (например, через console.log).
// Входные:
// let car = new Car();
// car.start();
// → Результат: Car started
// Входные:
// let car = new Car();
// car.stop();
// → Результат: Car stopped
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.start();
// → Результат: Motorcycle started
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.stop();
// → Результат: Motorcycle stopped
class Vehicle_21 {
}
class Car_21 extends Vehicle {
    start() {
        console.log('Car started');
    }
    stop() {
        console.log('Car stopped');
    }
}
class Motorcycle_21 extends Vehicle {
    start() {
        console.log('Car started');
    }
    stop() {
        console.log('Car stopped');
    }
}
const car_21 = new Car_21();
car_21.start();
car_21.stop();
const motorcycle_21 = new Motorcycle_21();
motorcycle_21.start();
motorcycle_21.stop();
