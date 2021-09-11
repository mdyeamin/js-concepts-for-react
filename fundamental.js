
const numbers = [12, 34, 62, 96, 68, 73]
numbers[3] = 555
// console.log(numbers);
numbers.push(333)
// console.log(numbers);
let sum = 1;
for (let i = 1; i <= 7; i++) {
    sum *= i
    // console.log(sum);
}
// console.log(sum);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    // console.log(number);
}

const student = {
    name: 'salib khan',
    age: 32,
    movies: ['kyuor', 'thambal', 'fruty']
}
const myAge = 'age'
// console.log(student['name']);
// console.log(student['movies'][0]);
console.log(student[myAge]);