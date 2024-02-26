// 12. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

interface arrStud {
    readonly id: number,
    name: string;
    surname: string;
    age: number
}

class ServerGetAll {
    controller() {
        return this.service()
    }
    service() {
        return this.repository()
    }
    repository() {
        const students_12: arrStud[] = [
            { id: 1, name: 'Ivan', surname: 'Ivanov', age: 21 },
            { id: 2, name: "Peter", surname: "Petrov", age: 31 },
            { id: 3, name: "Sidor", surname: "Sidorov", age: 22 },
            { id: 4, name: "Mihail", surname: "Mihailov", age: 23 }];

        return students_12
    }
}
const serverGetAll = new ServerGetAll();
console.log(serverGetAll.controller());
