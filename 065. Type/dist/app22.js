// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.
const arrObj_22 = [{ name: 'Ivan Ivanov', salary: 1253 },
    { name: 'Peter Petrov', salary: 3512 },
    { name: 'Sidor Sidorov', salary: 2135 },
    { name: 'Semen Semenov', salary: 5321 }];
const res_22 = arrObj_22.reduce((sum, el) => sum += el.salary / arrObj_22.length, 0);
console.log(res_22);
