let numbers = [12, 2, 10, 6, 5, 5, 3, 6, 9, 10, 33];

let difference = function(arr){
  // 중복제거 arr -> set -> arr
  // sort, 마지막 값 빼기 첫번째값
  let result = Array.from(new Set(arr)).sort((a,b) => (a-b))
  return result[result.length-1] - result[0]
}

console.log(difference(numbers));