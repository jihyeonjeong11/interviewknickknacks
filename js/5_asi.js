//automatic semicolon insertion이란?

// let a = {
//     a: 123
// }; // ; semicolon을 넣어주지 않으면 코드가 끊기지 않고 실행되기 때문에
// // Cannot access 'a' before initialization 오브젝트가 initialize가 되었다는 에러 발생.
// // ;를 넣으면 제대로 실행됨
// [a].forEach(function(x) {
//     console.log(x)
// })

let a // undefined value이고 역시 ;가 없다면 데이터 지정이 안됨.
{a: 123}[a] // 이런식으로 initialize가 끝난 variable에 넣어줄 수 있다
// a.forEach(function(x){
//     console.log(x)
// })
console.log(a)

// let obj = {a:123};
// [obj].forEach()
// {
//     a:123
// }[a]