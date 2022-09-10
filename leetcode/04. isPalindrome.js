// https://leetcode.com/problems/palindrome-number/

// 09/11 easy

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  const str = JSON.stringify(x)
  const reverse = str.split('').reverse().join('')
  return str == reverse ? true : false
  
};