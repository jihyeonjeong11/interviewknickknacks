// what will the output of following two loops be?

//first glance:
// 1. value will be empty? but loop will go for idx 10

//actual output
// for loop: 
// 0 1
// 1 2
// 2 3
// 3 undefined
// 4 undefined
// 5 undefined
// 6 undefined
// 7 undefined
// 8 undefined
// 9 undefined
// 10 11

// forEach
// 0 1
// 1 2
// 2 3
// 10 11
// so forEach not runs with empty vals

const nums = [1,2,3];
nums[10] = 11;
for(let i = 0; i < nums.length; i++){
    console.log(i, nums[i]);
}
nums.forEach((num,idx) => {
    console.log(idx, num);
})