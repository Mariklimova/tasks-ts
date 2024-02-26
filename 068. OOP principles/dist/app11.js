// 11. Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.
class University {
    students = [
        { id: 1, name: 'Ivan', surname: 'Ivanov', age: 21 },
        { id: 2, name: "Peter", surname: "Petrov", age: 31 },
        { id: 3, name: "Sidor", surname: "Sidorov", age: 22 },
        { id: 4, name: "Mihail", surname: "Mihailov", age: 23 }
    ];
}
class Student extends University {
    getStudentById(num) {
        const res_11 = this.students.filter(function (el) {
            return el.id === num;
        });
        return res_11;
    }
}
const student = new Student();
console.log(student.getStudentById(3));
