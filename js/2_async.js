let num = 0;
async function increment() {
    num += await 2; // Promist.resolve(2)
    console.log(num);
}
increment();
num +=1;
console.log(num);

// 
// 이 경우 우선 맨 아래의 console이 먼저 불리므로 1이 먼저 나옴
// increment는 await가 있으므로 event loop로 이동하고 실행이 보류됨
// 그리고 increment가 불린 시점에서 
// num은 0이므로 num += await 2는 0+2가 되어 
// 3이 아니라 2가 콘솔로 나온다