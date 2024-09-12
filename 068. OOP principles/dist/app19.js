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
class Animal_19 {
}
class Dog_19 extends Animal_19 {
    makeSound(sound) {
        console.log(sound);
    }
}
class Cat_19 extends Animal_19 {
    makeSound(sound) {
        console.log(sound);
    }
}
const cat_19 = new Cat_19();
const dog_19 = new Dog_19();
dog_19.makeSound("Гав-гав");
cat_19.makeSound("Мяу");
