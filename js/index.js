function taskOne() {
    let tc = 30;
    let tf = (9/5)*tc+32;
    alert(`Температура по Фаренгейту = ` + tf);
}
taskOne();

function taskTwo() {
    let name = `Василий`;
    let admin = name;
    alert(admin);
}
taskTwo();

function taskThree() {
    let a = 20;
    let b = 30;
    [ a , b ] = [ b , a ];
    alert(b);
}
taskThree();

function taskFour() {
    alert(1000+`108`); // string `1000108`
}
taskFour();
