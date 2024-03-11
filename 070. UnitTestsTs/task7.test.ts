// 7. Напишите функцию findPairWithSum(numbers: number[], targetSum: number):
// [number, number] | null, которая принимает массив чисел и целевую сумму, и
// возвращает пару чисел из массива, сумма которых равна целевой сумме. Если
// такая пара не найдена, функция должна возвращать null.



function findPairWithSum(numbers, targetSum) {
    try {
        let values = [targetSum - numbers[0]];
        for (let i = 1; i < numbers.length; i++) {
            let value = targetSum - numbers[i]
            if (values.includes(numbers[i])) {
                return [targetSum - numbers[i], numbers[i]]
            } else {
                values.push(value)
            }
        }
        return null;
    } catch (error) {
        return error.message
    }
}
const res = findPairWithSum([1, 2, 3, 4, 5, 6], 7);
console.log(res);
