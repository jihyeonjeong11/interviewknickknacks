/**
 * @param {number} x
 * @return {number}
 */

//medium 09/16 solved

// 원리는 간단했는데, MATH 없이 풀어보려고 했음.

// leetcode에서 9007199254740991 (int 가 표현할 수 있는 마지막 숫자)를 넘어서는 테스트케이스를 많이 봐왔기 떄문에,
// 스트링으로문제를 해결하려 했음.

// 생각해보니, 32 비트(2의 31승) 을 넘어가면 0을 넘어가는 조건이 있었기 때문에, 의미 없었을 수도 있지만 그냥 했음.

// CURRY를 사용한 이유, 펑션을 붙였을 때와, 동작 하나하나씩 떼놓고 측정해보고 싶었음.

// Runtime: 105 ms, faster than 61.13% of JavaScript online submissions for Reverse Integer.
// 2nd 143ms 13.10% 3rd 116ms 44.41 // 4th 147ms 10.97% 5th 128ms 26.47
// Memory Usage: 43.9 MB, less than 66.11% of JavaScript online submissions for Reverse Integer.

// 우선 좀 느린 것 같음.(스트링으로 계산하니까?)

// currying에 대해서 생각해보았음
// 일단 가독성은 나아졌다고 생각함.
// 하지만 currying에 대해 잘 이해하지 못하는 것 같음. 속도는 더 느려졌고.

var reverse = function (x) {
  let startTime = performance.now();

  function numToString(num) {
    return "" + num;
  }
  function stringSplit(string) {
    return string.split("");
  }
  function reduceStr(arr) {
    return arr.reverse().reduce((acc, curr) => {
      if (curr == "-") return curr + acc;
      return acc + curr;
    }, "");
  }
  function checkValidNumRange(reverseStr) {
    // string > number comparison은 나쁘다
    return parseInt(reverseStr, 10) < Math.pow(2, 31) * -1 ||
      reverseStr > Math.pow(2, 31) - 1
      ? 0
      : reverseStr;
  }
  function curry(a) {
    const str = numToString(a);
    return function () {
      const arr = stringSplit(str);
      return function () {
        const reverseStr = reduceStr(arr);
        return function () {
          return checkValidNumRange(reverseStr);
        };
      };
    };
  }

  const result = curry(x)()()();
  let endTime = performance.now();
  console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);

  return result;
};

// Math 사용해서 가져온 예시.
//

function reverse2(n) {
  let startTime = performance.now();
  // Array#reverse method takes no argument.
  // You can use `Math.abs()` instead of changing the sign if negative.
  // Conversion of string to number can be done with unary plus operator.
  //Math.abs는 절대값이므로 - 없애줌.
  //+String은 +와 같이 String을 Number로 변환함.
  var reverseN = +String(Math.abs(n)).split("").reverse().join("");
  let endTime = performance.now();
  console.log(`Call to reverse2 took ${endTime - startTime} milliseconds`);
  // Use a number constant instead of calculating the power
  if (reverseN > 0x7fffffff) {
    return 0;
  }
  // As we did not change the sign, you can do without the boolean isNegative.
  // Don't multiply with -1, just use the unary minus operator.
  // The ternary operator might interest you as well (you could even use it
  //    to combine the above return into one return statement)

  return n < 0 ? -reverseN : reverseN;
}

reverse2(9007199254740992);
reverse(9007199254740992);
