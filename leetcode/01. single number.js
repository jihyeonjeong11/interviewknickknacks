//https://leetcode.com/problems/single-number/

// easy
// 09/11 품

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  const obj = {}
  nums.forEach((item) => {
      obj[item] ? obj[item]++ : obj[item] = 1
  })
  return Object.keys(obj).filter((item) => obj[item] === 1)[0]
};