/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 09/11 품. easy

 var plusOne = function(digits) {

  const plus = (arr)  => {
    const result = arr
    
    for(let i = result.length-1; i>=0; i--){
      let curr = result[i]
      if(curr + 1 == 10){
        result[i] = 0
      } else {
        result[i] = result[i] + 1
        return result
      }
    }
    return result.every((item) => item === 0) ? [1, ...result] : [result]
  }

  const result  = plus(digits)
  return result
};

//plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
plusOne([9])