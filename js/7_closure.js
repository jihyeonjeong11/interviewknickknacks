//simple closure
// function을 겹쳐서 사용할 때 function에서 
// 사용하는 var가 밖에서 불러와져서 값을 보존하는 경우가 closure
function f1(a) {
    let b = 2;
    setTimeout(function(){
        console.log(a, b) // b가 function 상위에 있으므로 closure
    }, 1000);
}

function f2() {
    for(let i = 0; i < 3; i++) { // var i 일경우 같은 scope에서 작동, 
                                 // closure의 값이 보존되므로 333
                                 // let i일경우 스코프가 달라 
                                 // closure의 값이 보존되지 않으므로 closure가 아님 012
        setTimeout(function () {
            console.log(i);

        }, 1000 * 1)
    }
}

function f3() {
    for(var i = 0; i < 3; i++) { 
        setTimeout((function (x) {
            console.log(x);

        }).bind(null, i), 1000 * 1)
        // bind를 하면 i값이 this context에 속하니까 closure가 아님 0,1,2
    }
}


f3()