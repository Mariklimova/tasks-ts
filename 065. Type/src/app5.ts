// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.


const arr5: number[] = [2, 3, 6, 8, 65, 756, 755];

const res5 = arr5.filter(el => {
    return el % 3 == 0 && el % 2 != 0
})
console.log(res5);
