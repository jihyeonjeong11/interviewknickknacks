// console의 값은 무엇일까?
// 처음 예상: 값이 덮어씌워질거같음
// 결과: 덮어씌워지는 것이 맞음. 마지막 값이 표시됨

let obj = {
    'a': 'three',
    b: 4,
    a: 3,
    'b': 'four',
    "c": 'fem',
    "a": "tre",
    "b": 'fyra',
    c: 5
};

console.log(obj);