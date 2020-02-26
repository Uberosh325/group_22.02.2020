let val = 2, pow = 10;

console.log( power(val, pow) );

function power(val, pow) {
    let startVal = val;

    for (let i = 0; i < pow - 1; i++) {
        val *= startVal;
    }

    return val;
}