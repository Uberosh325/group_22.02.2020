if (0 == null) { // false
    console.log(1);
} else if (0 === null) { // false
    console.log(2);
} else if (0 < null) { // false
    console.log(3);
} else if (0 <= null) { // true; <= преобразует null в 0
    console.log(4);
} else if (0 > null) { //false
    console.log(5);
} else if (0 >= null) { // true; >= преобразует null в 0
    console.log(6);
} else { // false
    console.log(100);
}
