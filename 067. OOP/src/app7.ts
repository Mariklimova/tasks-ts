// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.

interface tasksList {
    readonly id: number,
    tasks: string
}

class TodoList {
    list: tasksList[] = [
        { id: 1, tasks: 'make the bed' },
        { id: 2, tasks: 'clean the room' },
        { id: 3, tasks: 'wash the dishes' },
        { id: 4, tasks: 'to water the flowers' }
    ]

    addTask(item: tasksList[]) {
        this.list = item;
    }

    removeTask(item) {
        delete this.list[item]
    }

    getTasks() {
        return this.list
    }

}
const todoList = new TodoList();
todoList.addTask( {'tasks': 'do your homework' })
todoList.removeTask( 'to water the flowers')
console.log(todoList.getTasks());