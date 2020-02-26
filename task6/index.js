let arg1 = 5, arg2 = 10;
let res;
let operation = addition;

console.log( mathOperation(arg1, arg2, operation) );

function addition(a, b) {
    return res = a + b;
}

function subtraction(a, b) {
    return res = a - b;
}

function division(a, b) {
    return res = a / b;
}

function multiplication(a, b) {
    return res = a * b;
}


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case addition:
            return addition(arg1, arg2);

        case subtraction:
            return subtraction(arg1, arg2);

        case division:
            return division(arg1, arg2);

        case multiplication:
            return multiplication(arg1, arg2);
    }
}
