// 15. Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.

class Cat_15 {
    private name: string = 'Murka';
    private age: number = 5;
    private color: string = 'red';

    getName() {
        return this.name
    }
    getAge() {
        return this.age;

    }
    getColor() {
        return this.color;
    }

}
const cat_15 = new Cat_15()
console.log(`name: ${cat_15.getName()}, age: ${cat_15.getAge()} year, color: ${cat_15.getColor()}`);
