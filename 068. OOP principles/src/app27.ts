// 10. Создайте абстрактный класс University, который содержит:
// • абстрактный метод getStudentById(id: number),
// • поле students — массив объектов студентов.
// Реализуйте класс Student, который наследуется от University и реализует метод getStudentById,
// возвращающий объект студента по его ID.
// const students = [
//  new Student(1, 'Alice'),
//  new Student(2, 'Bob'),
//  new Student(3, 'Charlie')
// ];
// Входные:
// let university = new UniversityStudent([
//  new Student(1, 'Alice'),
//  new Student(2, 'Bob')
// ]);
// university.getStudentById(1);
// → Результат: { id: 1, name: 'Alice' }

interface iStudent {
    id: number;
    name: string;
}

abstract class University_27 {
    students: iStudent[] = [{ id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }];

    abstract getStudentById(num: number): iStudent;
}

class Student_27 extends University_27 {
    getStudentById = (num: number): iStudent => this.students.filter((el) => el.id === num)[0];
}
const student_27 = new Student_27();
console.log(student_27.getStudentById(1));
