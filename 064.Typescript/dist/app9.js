const str1 = 'hello';
const arr = [];
for (let i = 0; i < str1.length; i++) {
    if (!arr.includes(str1[i]))
        arr.push(str1[i]);
}
console.log(arr.join(''));
