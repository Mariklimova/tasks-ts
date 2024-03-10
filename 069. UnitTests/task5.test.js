// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

const arrPhone = ['+15656233','+126565655','5466565652','54988953', '5466565652'];

function getUniquePhone(arrPhone) {
    try {
      if(!Array.isArray(arrPhone)) throw new Error('not Array')
        if(!arrPhone || !arrPhone.length) throw new Error("invalid array of phone")
        const uniquePhone = [];
        for (let el of arrPhone) {
          if (!uniquePhone.includes(el)) {
            uniquePhone.push(el);
          }
        }
        return uniquePhone
    } catch (error) {
        return error.message
    }
}

describe('test getUniquePhone',()=>{
  test('successful',()=>{
    const equal = ['+15656233','+126565655','5466565652','54988953'];
    const res = getUniquePhone(arrPhone);
    expect(res).toEqual(equal);
    expect(res).toHaveLength(4)
  })

  test('false',()=>{
    const res = getUniquePhone([]);
    expect(res).toEqual("invalid array of phone")
  })
  
})



