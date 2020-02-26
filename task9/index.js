let a = 0;

do {
    if (a === 0) {
        console.log(`${a} - это ноль`);
        a++;
    } else if (a % 2 === 0) {
        console.log(`${a} - это чётное число`);
        a++;
    } else if (a % 2 === 1) {
        console.log(`${a} - это это нечётное число`);
        a++;
    }
} while (a <= 10);
