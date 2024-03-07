// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

const arrPhone = ['+15656233','+126565655','5466565652','54988953'];

function getUniquePhon(arrPhone) {
    try {
        if(!arrPhone || !arrPhone.length) throw new Error("invalid array of phone")
        const uniquePhone = [];
        for (let el of arrPhone) {
          if (arrPhone.indexOf(el) === arrPhone.lastIndexOf(el)) {
            uniquePhone.push(el);
          }
        }
        return uniquePhone
    } catch (error) {
        return error.message
    }
}

