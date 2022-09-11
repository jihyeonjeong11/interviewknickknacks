/**
 * @param {number[]} nums
 * @return {string}
 */

//Input: nums = [3,30,34,5,9]
//Output: "9534330"

// iter
// 9가 제일큼
// '9'
// '5'가 제일큼
// '95'
// '34'가 제일큼
// '33'이 제일큼
// '30'

var largestNumber = function(nums) {
  if(nums.every((item) => item === 0)) return "0"
  const result = nums.sort(compareFunc)
  function compareFunc(numStr1, numStr2) {
      let combinedNumStr1 = numStr1 + "" + numStr2;
      let combinedNumStr2 = numStr2 + "" + numStr1;
      
      return combinedNumStr2 - combinedNumStr1;
  }
  return result.reduce((acc, next) => acc+next, '')
};