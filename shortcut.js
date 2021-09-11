let myVar = 5;
if (myVar) {
    myVar *= 100;
}
else {
    myVar = 0
}
// console.log(myVar);

const MyMoney = 50;
let eate;
if (!MyMoney) {
    eate = 'water'
}
else {
    eate = 'pasta'
}
// console.log(eate);


const money = 80;
let food;
// if (money >= 100) {
//     food = 'biriany'
// }
// else {
//     food = 'cha biscute'
// }
// console.log(food);
let food1 = money > 100 ? 'biriani' : 'cha'
// console.log(food1);

const drink = (money > 100 && myVar > 100) ? 'coke' : 'drink warer';
// console.log(drink);

const number = 24;
// console.log(number);
const numberStr = number + '';
// console.log(numberStr);

const input = '24';
// console.log(input);

const inputNum = +input;
// console.log(inputNum);

const isActive = false;
const displayUser = () => (console.log('show user'));
const hideUser = () => (console.log('hide user'));

// isActive ? displayUser() : hideUser()

isActive && displayUser()

isActive || displayUser()

// toggol boolean
isActive = !isActive