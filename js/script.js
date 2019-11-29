/* Задание 1 */
function taskOne() {
    let a = 1;
    let b = 1;
    let  c;
    let d;
    c = ++a;
    alert(c);           // c = 2; a = 2;
    d = b++;
    alert(d);           // d = 1; b = 2;
    c = (2 + ++a);
    alert(c);           // c = 5; a = 3;
    d = (2 + b++);
    alert(d);           // d = 4; b = 3;
    alert(a);           // a = 3;
    alert(b);           // b = 3;
}
taskOne();

/* Задание 2 */
function taskTwo() {
    let a = 2;
    let x = 1 + (a *= 2);
    alert(x); // x = 5
}

taskTwo();


/* Задание 3 */
function taskThree() {
    let a = +prompt('Введите число a'),
        b = +prompt('Введите число b');
    if (a >= 0 && b >= 0) {
        alert(a - b);
    } else if (a < 0 && b < 0) {
        alert(a * b);
    } else {
        alert(a + b);
    }
}

taskThree();

/* Задание 4 */
function checkA(a) {
    if (a !== null && (a < 1 || a > 15 || isNaN(a))) {
        return a;
    }
}

function taskFour() {
    let a = prompt('Введите число от 1 до 15');
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    checkA(a);
    switch (a) {
        case 1:
            alert(arr);
            break;
        case 15:
            alert(a);
            break;
        default:
            alert(arr.slice(a - 1));
    }
}

taskFour();

/* Задание 5 */
function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mul (a, b) {
    return a * b;
}

/* Задание 6 */
function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return add (arg1, arg2);
            break;
        case '-':
            return sub (arg1, arg2);
            break;
        case '/':
            return div (arg1, arg2);
            break;
        case '*':
            return mul (arg1, arg2);
            break;
    }
}


/* Задание 7 */
console.log(null > 0);  // false, потому-что
console.log(null == 0); // false, потому-что null == undefended // true, a undefined == 0 // false
console.log(null >= 0); // true, потому-что

/*
* Потому-что нестрогое равенство и сравнения работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0. Поэтому null >= 0 истинно, а null > 0 ложно.
* null == 0 // false, потому-что null == undefended // true, a undefined == 0 // false
*/

/* Задание 8 */
function power(val, pow) {
    if (pow > 0) {
        return val * power(val, pow - 1);
    } else if (pow < 0) {
        return val * power(val, pow + 1);
    } else
        return 1;
}
