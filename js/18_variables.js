(function f1(){
    var a = 1, b = 1;
    var x = y = 2;
})();
(function f2(){
    let j = 1, k = 1;
    let r = s = 2;
})();

// 해당 변수들의 값은 무엇일까요?
// var나 let이 없이 지정된 y, s만 global.로 지정되어 값이 있다.
console.log(global.j)