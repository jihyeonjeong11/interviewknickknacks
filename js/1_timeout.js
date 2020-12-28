console.log('a');
let timer1 = setTimeout(function() {
    console.log('b');
}, 1);
let timer2 = setTimeout(function() {
    console.log('c');
}, 10);
let timer3 = setTimeout(function() {
    console.log('d');
}, 0);

console.log('e');

// 이 경우 순서는 a, e, b, d, c
// call stack의 a, e가 먼저 불리고 이벤트 루프가 
//resolve 되는데 console.log('e')때 1밀리섹이 이미 끝나서 
//resolve되므로  b가 먼저 콘솔이 뜨게 된다.