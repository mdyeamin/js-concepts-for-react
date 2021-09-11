// convart JSON stringify and parse
const student = {
    name: 'salib khan',
    age: 32,
    movies: ['kyuor', 'thambal', 'fruty']
}


const studentStringified = JSON.stringify(student);

// console.log(studentStringified);
const studentParse = JSON.parse(studentStringified)
// console.log(studentParse);


// keys , value 

const keys = Object.keys(student)
// console.log(keys);

const values = Object.values(student)
// console.log(values);

const entries = Object.entries(student);
// console.log(entries);
// for
const numbers = [43, 56, 79, 15, 34];
// numbers.forEach(num => console.log(num))

const num = numbers.map(num => num * 2);
// console.log(num);


// for of on array like objct
// loop on an object using for in 




const products = [
    { name: 'laptop', brand: 'dell', price: 32000, color: 'gray' },
    { name: 'phone', brand: 'iphone', price: 92000, color: 'golden' },
    { name: 'watch', brand: 'kyw', price: 3000, color: 'black' },
    { name: 'sunglass', brand: 'kyno', price: 400, color: 'black' },
    { name: 'bottol', brand: 'hangty', price: 100, color: 'yellow' }
];

const newProduct = { name: 'webCam', brand: 'lal', price: '4000' }

const newProducts = [...products, newProduct];
// console.log(newProducts);

const remaining1 = products.filter(product => product.name !== ('phone'))
console.log(remaining1)
const remaining2 = products.filter(product => !product.name.includes('phone'))
console.log(remaining2)
