/* Задание 1 */
function taskOne() {
    let numbers = +prompt("Введите положительное число до 100");
    let x = 1;
    while (x < numbers) {
        x++;
        if ((x % 2 == 0 && x / 2 >= 2) || (x % 3 == 0 && x / 3 >= 3) || (x % 5 == 0 && x / 5 >= 5) || (x % 7 == 0 && x / 7 >= 7)) {
        } else {
            console.log(x + " - простое");
        }
    }
}
taskOne();

/* Задание 4. */
function taskTwo() {
    for (let i = 0; i < 10; console.log(i++)) {
    }
}
taskTwo();

/* Задание 4) * */
function taskThree() {
    let x = '\nx';
    for (let i = 20; i--;) {
        console.log(x);
        x = x + 'x';
    }
}
taskThree();