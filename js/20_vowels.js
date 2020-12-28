/*
vowel flip이란 string안의 모음의 위치를 뒤바꾸는 것이다.
모음 갯수가 홀수라면 중앙의 하나는 위치가 바뀌지 않음.

eg
cottage => cettago
hello => holle
sauce => seuca
javascript => jivascrapt
*/

let aeiou = ['a','e','i','o','u']

let vowel = word => {
  let vowels = word.split('').filter((item, idx) => aeiou.includes(item))
  let odd = vowels.length % 2 > 0;
  let result = '';
  let vowelIdx = vowels.length -1;
  for(let i in word){
    if(aeiou.includes(word[i])){

        result += vowels[vowelIdx];
        vowelIdx = vowelIdx -1;
    } else {
        result += word[i]
    }
    console.log(word)
  }
  return result
}

console.log(vowel('javascript'))
//console.log(vowel('hello'))