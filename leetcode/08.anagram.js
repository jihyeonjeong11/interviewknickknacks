// https://leetcode.com/problems/valid-anagram/submissions/

// 09/11 easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  const str1 = s.split('').sort().join('')
  const str2 = t.split('').sort().join('')
  return str1 === str2
};

// alphabetical sort가 그냥 sort로 가능하다는걸 알았기 때문에, 간단했다.