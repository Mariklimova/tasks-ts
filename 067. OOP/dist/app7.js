// 7. Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList {
    list = [
        { id: 1, tasks: 'make the bed' },
        { id: 2, tasks: 'clean the room' },
        { id: 3, tasks: 'wash the dishes' },
        { id: 4, tasks: 'to water the flowers' }
    ];
    addTask(item) {
        return this.list.push(item);
    }
    removeTask(item) {
        //  delete this.list[item]
        const res = this.list.filter((el) => (el.tasks !== item));
        this.list = res;
        return res;
    }
    getTasks() {
        return this.list;
    }
}
const todoList = new TodoList();
todoList.addTask({ id: 5, tasks: 'do your homework' });
todoList.removeTask('to water the flowers');
console.log(todoList.getTasks());
