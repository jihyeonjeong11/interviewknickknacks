/**
 * @param {number[]} nums
 * @return {number}
 */

// 일단 sorted로 나누면 규칙성이 나올듯?
var longestConsecutive = function(nums) {
  const sorted = Array.from(new Set(nums.sort((a,b) => a-b)))
  let result = -1
  let i = 0;
  let temp = -1;
  let startIdx = 0;
  while(i<sorted.length+1){

      if(temp + 1 === sorted[i]){
          temp = sorted[i]
          i++
          // console.log('continue', i)
          // console.log(result)

          continue;
      }else {
          result = i - startIdx > result ? i - startIdx : result
          temp = sorted[i]
          startIdx = i

          i++
          // console.log('stop', i)
          // console.log(result)

          continue;
      }
     
  }
  return result
};

//longestConsecutive([0,3,7,2,5,8,4,6,0,1])

//longestConsecutive([1,2,0,1])

//longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])

longestConsecutive([9,1,-3,2,4,8,3,-1,6,-2,-4,7])


// 프로그래밍적 사고는 어떻게 하는걸까?

