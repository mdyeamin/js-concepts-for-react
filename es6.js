const numbers = [12, 34, 62, 96, 68, 73]
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['kyuor', 'thambal', 'fruty']
}

const about = `hello world this is ${student.name}`
// console.log(about);

let numList = [1, 2, 3];
let numListClone = [numList]; // [1, 2, 3]
// console.log(numListClone);


const numbersClone = [12, 34, 62, 96, 68, 73]

const numClone = [...numbersClone];
// console.log(numClone);

const getFivetyFive = () => 55; //console.log(getFivetyFive());
const addSixtyFive = num => num + 65;// console.log(addSixtyFive(2));
const isEven = x => x % 2 == 0; //console.log(isEven(62));
const addThree = (x, y, z) => x + y + z; //console.log(addThree(1, 2, 3));


const spreadNum = [34, 56, 87, 99]

const cloneSpread = [...spreadNum, 21];// copy old array and 21 add
console.log(cloneSpread)

spreadNum.push(111)
spreadNum.push(222)
console.log(spreadNum)
