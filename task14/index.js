/* !!! КОСТЫЛИ И ВЕЛОСЕПЕДЫ, НО ЗАТО РАБОТАЕТ !!! */
const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];
let result1 = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function indexOfMaxArr (arr) {
    return arr.indexOf(Math.max.apply(null, arr));
}

function minNumInMaxArr (arr) {
    return Math.min.apply(null, arr)
}

for (let i = 0; i < arr.length; i++) {
    result1.push(arr[i].reduce(reducer));
}

console.log( indexOfMaxArr(result1) ); // Номер 1
console.log( minNumInMaxArr(arr[indexOfMaxArr(result1)]) ); // Номер 2


