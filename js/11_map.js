

let result = ['1', '7', '11'].map(parseInt)
// 결과는 [1, NaN, 3]
// 그 이뉴는 map(item, idx)를 받기 때문에 진법이 idx에 따라 나눠지기 때문이다.
//let result = ['1', '7', '11'].map((item)=>parseInt(item))이 맞음
console.log(result);