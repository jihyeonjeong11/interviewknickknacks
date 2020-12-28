//variable scope

// what will be the output of the tree logs
// and in what order?

(()=> {
    let one, two;
    try {
        throw new Error(321); // 1. this will cause catch block to run
    } catch (one){ // one is error object
        (one = 123), (two = 321); 
        // error object one will be replaced as 123
        // let two gets 321
        console.log(one);
    }
    console.log(one); // from here can't access above 'one'(error obj) undefined
    console.log(two); // this one got value from above
})();

