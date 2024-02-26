// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.


interface objSal {
    name: string,
    salary: number
}

const arrObj_22: objSal[] =
    [{ name: 'Ivan Ivanov', salary: 1253 },
    { name: 'Peter Petrov', salary: 3512 },
    { name: 'Sidor Sidorov', salary: 2135 },
    { name: 'Semen Semenov', salary: 5321 }]

const res_22: number = arrObj_22.reduce((sum: number, el: objSal) => sum += el.salary / arrObj_22.length, 0)
console.log(res_22);
