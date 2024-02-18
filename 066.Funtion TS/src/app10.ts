// 10. Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
// вернет 5. Использовать каррирование

function findSum(num_1:number,num_2:number) {
  return function(num_2){
    return num_1+num_2
  }  
}
const res_10 = findSum(2,3)
console.log(res_10);
