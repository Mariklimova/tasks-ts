// 5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)

abstract class Vehicle {
    abstract start(): void
    abstract stop(): void
}

class Car extends Vehicle {
    start(): void {
        console.log('car start');

    }
    stop(): void {
        console.log('car stop');

    }
}

class Motorcycle extends Vehicle {
    start(): void {
        console.log('moto start');

    }
    stop(): void {
        console.log('moto stop');

    }
}

const car = new Car();
const motorcycle = new Motorcycle();
car.start();
motorcycle.start();
car.stop();
motorcycle.stop();
