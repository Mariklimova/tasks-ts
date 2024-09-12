// 2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
// Затем создайте два дочерних класса:
// • Dog
// • Cat
// Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
// возвращая соответствующий звук животного.
// Входные: Dog().makeSound() → Результат: "Гав-гав"
// Объяснение: Метод makeSound() для объекта класса Dog должен вернуть звук собаки.
// Входные: Cat().makeSound() → Результат: "Мяу"
// Объяснение: Метод makeSound() для объекта класса Cat должен вернуть звук кошки.


abstract class Animal_19 {
    abstract makeSound(sound: string): void
}

class Dog_19 extends Animal_19 {
    makeSound(sound: string): void {
        console.log(sound);

    }
}

class Cat_19 extends Animal_19 {
    makeSound(sound: string): void {
        console.log(sound);

    }
}

const cat_19 = new Cat_19();
const dog_19 = new Dog_19();

dog_19.makeSound("Гав-гав")
cat_19.makeSound( "Мяу")
