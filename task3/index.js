let a = 7, b = 3;

if (a >= 0 && b >= 0) { // ноль можно считать положительным числом
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else if (a * b < 0) {
    console.log(a + b);
} else {
    console.log('Странные числа какие-то...')
}
