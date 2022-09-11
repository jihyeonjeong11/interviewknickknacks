//https://leetcode.com/problems/move-zeroes/submissions/

// 9/11 easy


// 1. num 자체를 바꿔야 한다. splice???
// 2. 0없는 어레이에 0 갯수만큼 넣어준다.
// 다른 솔루션에도 스플라이스만 쓰더라...

var moveZeroes = function(nums) {
  const result = []
  let numberOfZero = 0
  let i = 0;
  while(true){
    let idx = nums.findIndex((item) => item == 0)
    if(idx > -1){
      nums.splice(idx, 1)
      numberOfZero++
    } else {
      break
    }
  }
  for(const zero of Array(numberOfZero).fill(true)){
      nums.push(0)
  }
};

moveZeroes([0,0,1])

