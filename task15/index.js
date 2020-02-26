let arr = [];
let arr1;
let arr2;
let arr3;

function random (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function uniqueVal (value, index, self) {
    return self.indexOf(value) === index;
}

for (let i = 0; i < 10; i++) {
    arr.push( random(-10, 11) );
}

console.log(arr); // Номер 2

arr1 = arr.filter(uniqueVal);

console.log(arr1); // Номер 5

arr2 = arr1.slice(0);

for (let i = arr2.length; i < 10;) {
    arr1.unshift( random(-10, 11) );

    if (arr2.findIndex( currentValue => currentValue === arr1[0] ) === -1) {
        arr2.unshift(arr1[0]);
        i++;
    } else {
        arr1.shift();
    }
}

console.log(arr2); // Номер 7


function find_0 (arr) {
    if (arr.includes(0)) {
        let zero = [];

        zero.push(0);

        return zero;
    }
    return [];
}

function positiveNums (arr) {
    let positiveRes = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveRes.push(arr[i]);
        }
    }
    positiveRes.sort(function (a, b) {
        return a - b;
    });

    return positiveRes;
}

function negativeNums (arr) {
    let negativeRes = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeRes.push(arr[i]);
        }
    }
    negativeRes.sort(function (a, b) {
        return b - a;
    });

    return negativeRes;
}

arr3 = find_0(arr2).concat(negativeNums(arr2), positiveNums(arr2));

console.log(arr3); // Номер 9
