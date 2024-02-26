// 16. Создайте базовый класс Person, представляющий человека. У класса Person
// должны быть свойства name и age. Создайте класс Student, наследующийся от
// Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
// getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
// Student и выведите их данные.

class Person {
    name: string;
    age: number

}

class Student_16 extends Person {
    averageGrade: number

    getName(name: string): void {
        this.name = name;
    }
    getAge(age: number): void {
        this.age = age;
    }
    getAverageGrade(grade: number): void {
        this.averageGrade = grade;
    }
}
const student_16 = new Student_16();
student_16.getName('Ivan');
student_16.getAge(20);
student_16.getAverageGrade(10457);

console.log(student_16.name, student_16.age, student_16.averageGrade);


