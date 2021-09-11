// array destructuring
const numbers = [23, 43, 67];

// const x = numbers[0];
// const y = numbers[1];
// const z = numbers[2];

// const [x, y, z] = [23, 43, 67]
const [x, y, z] = numbers
// console.log(x, y, z);

function towArray(num1, num2) {
    return [num1, num2]
}

const [a, b] = towArray(99, 34)
// console.log(a, b);
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['kyuor', 'thambal', 'fruty']
}

const [fiseMovie, secundMovie, thirdMovie] = student.movies;
// console.log(fiseMovie, secundMovie, thirdMovie);


// object dectructuring

const { name, age, id, salary } = { id: 12, name: 'alu', salary: 34000, age: 14 };
// console.log(name, age, salary, id);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    spasification: {
        height: 66,
        weight: 68,
        address: 'gosa TouchList',
        drink: 'water',
        watch: {
            color: 'black',
            price: 3200,
        }
    }
}

const { ide, designation } = employee;
// console.log(ide, designation);
const { height, address } = employee.spasification;
// console.log(height, address);

const [firstLang, sesundLang, thirdLang] = employee.languages;
// console.log(firstLang, sesundLang, thirdLang);

const { color, price } = employee?.spasification?.watch;
console.log(color, price);