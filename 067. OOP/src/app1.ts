// 1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте экземпляр класса Student и выведите
// свойства.

class Student {
    name: string = 'Agata';
    age:number = 10
}
const student = new Student();
console.log(student.name);
console.log(student.age);
