let rub = prompt('сколько денег вы хотите положить на счёт?');
rub = + rub;
if (rub >= 0){
    alert(`Ваша сумма в ${rub} рубл${rightDeclension(rub)} успешно зачислена`);
} else {
    alert('На счёт нельзя зачислять минусовые суммы!!!');
}

function rightDeclension (rub) {
    let res;

    if (rub >= 5 || rub === 0) {
        res = 'ей';
    } else if (rub >= 2 && rub <= 4) {
        res = 'я';
    } else if (rub === 1) {
        res = 'ь';
    } else {
        res = '!!! ERROR !!!';
    }
    return res;
}
