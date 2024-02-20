// 2. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит с помощью экземпляра класса.
// Создайте экземпляр класса Student и выведите их свойства.
// class Student2 {
//     name: string;
//     age: number;
//     constructor(a: string, b: number) {
//         this.name = a;
//         this.age = b;
//     }
// }
// const student2 = new Student2('Agata', 10);
// console.log(student2.name);
// console.log(student2.age);
class Student2 {
    name;
    age;
}
const student2 = new Student2();
student2.name = 'Agata';
student2.age = 10;
console.log(student2.name);
console.log(student2.age);
