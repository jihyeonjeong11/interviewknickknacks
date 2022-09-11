//https://leetcode.com/problems/search-insert-position/submissions/

// 9/11 easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 1. target가 배열 값보다 다 크면 마지막 인덱스
// 아니라면 for loop을 통해 target이있으면 해당 인덱스, 없으면 target보다 높은 item 의 인덱스
 var searchInsert = function(nums, target) {
  let last = nums[nums.length -1]
  if (target > last) return nums.length
  return (nums.findIndex((item) => item == target ? item : item > target ))
};