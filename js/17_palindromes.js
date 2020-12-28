// palindrome이란 앞이나 뒤로 읽어도 같은 단어일때
// radar, kayak, redder같은것들


let palindrome = function(word){
  let lowerCases = word.toLowerCase()
  return lowerCases.split('').reverse().join('') === lowerCases;
}

console.log(palindrome('Radar'));
console.log(palindrome('redder'));
console.log(palindrome('window'));