//https://leetcode.com/problems/add-digits/submissions/

// 09/15 easy
// 푼 시간 12분

// 함수형으로 풀기 위해서 split하는 부분과 reduce하는 부분을 만듬

// Runtime: 112 ms, faster than 35.34% of JavaScript online submissions for Add Digits.
// Memory Usage: 44.3 MB, less than 22.13% of JavaScript online submissions for Add Digits.

// 다만 결과가 빠르지 않았음.
var addDigits = function (num) {
  function numSplit(num) {
    return num.toSplit().split("");
  }
  function strReduce(arr) {
    return arr.reduce((acc, n) => acc + Number(n), 0);
  }

  function plusStr(num1) {
    const split = numSplit(num1);
    const sum = strReduce(split);
    if (split.length == 1) return sum;
    return plusStr(sum);
  }
  return plusStr(num);
};

// 별 많이 받은 결과랑 비교하봄

//Runtime: 76 ms, faster than 58.95% of JavaScript online submissions for Add Digits.
//Memory Usage: 36.2 MB, less than 33.33% of JavaScript online submissions for Add Digits.
//

var addDigits2 = function (num) {
  const str = "" + num; // 이 부분, toSplit이나 String()대신 '' + 를 사용하는 것이 더 빠르다.
  const res = addSum(str);
  return res;
};

var addSum = (str) => {
  const res = str.split(""); // 스플릿 사용하는 것은 동일
  const nums = res.map((e) => {
    return +e;
  }); // +element로 하면 스트링이 넘버가 되는구나.
  const sum = nums.reduce((acc, curr) => {
    return (acc += curr);
  }, 0); // reduce 동일
  const newStr = "" + sum; // 역시 toString보다는 '' + num이 더 빠른가보다.
  if (newStr.length > 1) {
    return addSum("" + sum);
  }
  return sum;
};

// 위처럼, toString 만 바꿔주어도 속도가 50% 이상으로 상승했다.

// 모든 기능을 function 으로 바꾸니

//Runtime: 119 ms, faster than 40.03% of JavaScript online submissions for Add Digits.
// Memory Usage: 43.7 MB, less than 65.36% of JavaScript online submissions for Add Digits.

// 속도는 40퍼이지만 메모리 사용량은 재사용떄문에 굉장히 좋아졌다.

// 위 답처럼 그냥 박아버리면, 아마 속도는 올라가겠으나, 메모리는 더 쓸것이라 생각한다.

var addDigits3 = function (num) {
  function numToString(num) {
    return "" + num;
  }
  function stringSplit(string) {
    return string.split("");
  }
  function strReduce(arr) {
    return arr.reduce((acc, n) => acc + Number(n), 0);
  }

  function plusStr(num1) {
    const str = numToString(num1);
    const split = stringSplit(str);
    const numArr = splitToNumArr(split);
    const sum = strReduce(numArr);
    const newStr = numToString(sum);
    if (newStr.length == 1) return sum;
    return plusStr(sum);
  }
  return plusStr(num);
};

//Runtime: 96 ms, faster than 72.71% of JavaScript online submissions for Add Digits.
//Memory Usage: 44.2 MB, less than 34.32% of JavaScript online submissions for Add Digits.

// 위 2번 답 참고해서 numArr 펑션도 만들어봄
// 속도는 굉장히 올라갔지만, 메모리 사용량이 꽤 늘어남. 아마 이것은 map 생성하는 것이 역시 arr 메모리 사용량이 많기 떄문이라고 생각한다.
// 하지만 장기적으로 보았을떄, 위 펑션을 재활용하니깐 코드가 늘어나면 결국 메모리 사용량이 줄어들거라고 생각해.

var addDigits4 = function (num) {
  function numToString(num) {
    return "" + num;
  }
  function stringSplit(string) {
    return string.split("");
  }
  function strReduce(arr) {
    return arr.reduce((acc, n) => acc + n, 0);
  }
  function splitToNumArr(str) {
    return str.map((item) => +item);
  }

  function plusStr(num1) {
    const str = numToString(num1);
    const split = stringSplit(str);
    const numArr = splitToNumArr(split);
    const sum = strReduce(numArr);
    const newStr = numToString(sum);
    if (newStr.length > 1) return plusStr(sum);
    return sum;
  }
  return plusStr(num);
};

// 그리고 다음부터는 속도와 메모리가 들쭉날쭉하니 한 다섯번정도 돌려서 평균값으로표기해야겠다.
