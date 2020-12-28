// what will be the output from console log?
// first glance: box will have two prop with monday and tuesday as values

// real output { '[object Object]': 'Tuesday' }

let box = {};
let bag = {
    prop: 'bag',
    can: 'box'
};
let can = {
    prop: 'can',
    bag: 'box'
};

box[bag] = 'Monday'; 
// this means box['[Object object]'], not  
//box[{prop: 'bag', can: 'box'}]
box[can] = 'Tuesday';
// this overrides box['[Object object]'] = 'tuesday'

console.log(box);