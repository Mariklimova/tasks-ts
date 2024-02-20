// 4. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в getter, setter класса. Создайте
// экземпляр класса Student и выведите свойства.


class Student4 {
    name: string;
    age: number;

    setName(name: string) {
        this.name = name
    }

    setAge(age:number){
        this.age = age
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }

}
const student4 = new Student4();
student4.setName('Marina');
student4.setAge(10)

console.log(student4.getName());
console.log(student4.getAge());


