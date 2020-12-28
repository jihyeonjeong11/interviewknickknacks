// singleton 패턴 예제
// 이 패턴을 쓰는 이유는 
// 하나의 module을 생성하고 돌려써서 메모리를 아끼는 것임

let obj = (function(){
    let objInstance;
    let _isRunning = false;
    
    function create() {
        let start = function(){
            _isRunning = true;
        }
        let stop = function(){
            _isRunning = false;
    
        }
        let currentState = function(){
            return _isRunning;
        }
        return {
            start: start,
            stop: stop,
            currentState: currentState
        }
        // create로 instance를 시작하며 
        // _isRunning이라는 closure를 state로 활용
    }
    return {
        getInstance: function(){
            if(!objInstance){
                objInstance = create();
            }
            return objInstance;
        }
    }
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
console.log(obj1.currentState())
console.log(obj2.currentState())
obj1.start(); // 같은 obj를 reference로 가지므로 
// 하나만 start해도 둘다 켜진 상태가 됨
console.log(obj1.currentState())
console.log(obj2.currentState())
