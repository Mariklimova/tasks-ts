const str10 = ['hello', 'hi', 'world'];
const res10 = str10.map((el) => {
    return el.split('').filter((l) => {
        return 'aoiue'.includes(l.toLocaleLowerCase());
    }).join('');
});
console.log(res10);
