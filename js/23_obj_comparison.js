// what will be the output of this code?

//first glance: Saturday. obj examines its address in memory not by value
// so none of these conditions will be passed

// actual output: saturday


let obj = {a:1};
let objb = {a:1};

if({a:1} === {a:1}){
    console.log('Monday')
} else if({a:1} == {a:1}){
    console.log('Tuesday');
} else if (obj == {a:1}){
    console.log('Wednesday');
} else if (obj == objb){
    console.log('Thursday');
} else if (Object.is(obj, objb)){
    console.log('Friday');
} else {
    console.log('Saturday');
} 