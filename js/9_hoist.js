// var hoising vs let hoisting

function f() {
    // area = undefined
    // name; not defined, not assign any default value
    console.log('var', area); // undefined var만 hoisting되고
                              //data는 안됨
    console.log('let', name); // reference error
    var area = 'geology';
    let name = 'Bert';
}

f();