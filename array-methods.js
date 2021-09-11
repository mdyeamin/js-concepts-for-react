const products = [
    { name: 'laptop', brand: 'dell', price: 32000, color: 'gray' },
    { name: 'phone', brand: 'iphone', price: 92000, color: 'golden' },
    { name: 'watch', brand: 'kyw', price: 3000, color: 'black' },
    { name: 'sunglass', brand: 'kyno', price: 400, color: 'black' },
    { name: 'bottol', brand: 'hangty', price: 100, color: 'yellow' }
];

// const price = products.map(x => x.price); console.log(price);

// products.forEach(product => console.log(product.brand));

products.forEach(product => {
    const p = product.name;
    // console.log(p);
})

const cheap = products.filter(product => product.price <= 5000)
// console.log(cheap);

const spasificName = products.filter(product => product.name.includes('n'))
// console.log(spasificName)

const special = products.find(product => product.name.includes('n'))
console.log(special);