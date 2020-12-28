//what will the value of the three logs be?

// first glance: Number can have prop? 
//if it does console print true or not error

// actual output:

// undefined
// true
// undefined

// only new Number(num) can have prop

let n1 = 11; //primitive
let n2 = new Number(123); //object
let n3 = Number(123); // primitive

n1.prop = true;
n2.prop = true;
n3.prop = true;

console.log(n1.prop);
console.log(n2.prop);
console.log(n3.prop);