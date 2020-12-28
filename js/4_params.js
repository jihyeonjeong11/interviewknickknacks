let f = function (a,b){
  console.log(arguments)
  //arguments [Arguments] { '0': 1, '1': 2, '2': 3 } 형식으로 출력
  //console.log(arguments.length) args의 길이, 
  //console.log(f.length) func가 받는 args의 길이
  if(arguments.length === f.length){
    console.log('we have a match')
  }else {
    console.log('no match')
  }
};

f(1);
f(1,2);
f(1,2,3);