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

//set 자료 구조를 활용한 풀이.

// 기존에 내가 for loop으로 모두 돌았던 것과는 다르게, new Set.has 을 써서 시작 값의 +count값이 있다면 있는걸로 
//계속 올려주었다.

// 내가 적은것과 비교해 시간은 더 많이 걸림.
// 메모리는 1mb가량 덜 사용함.

var longestConsecutive = function(nums) {
  if (nums == null || nums.length === 0) return 0;
  const set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    if (!set.has(num - 1)) {
      let count = 0;
      while (set.has(count+num)) {
        count++;
      }
      longest = Math.max(longest,count);
    }
  }
  return longest;
};