// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.

const arr7:string[]=[]

for (let i = 0; i < 6; i++) {
    arr7.push(prompt());
    
}
 const res7 = arr7.map(el=>{
   return Number(el)
 }).filter((el)=>{
    return !isNaN(el)
 });
 console.log(res7);
 