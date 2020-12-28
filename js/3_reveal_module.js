// object literal로 render method만 보이는 module 생성 패턴

let myModule = (function() {
    let _data = [];
    let _render = function(){
        //render jsx
    }
    let _add = function(){
        _data.push('asdf');
    };
    let _remove = function(){
        _data.pop();
    }
    return {
        render: _render
    }
})();

myModule.render();// 이 부분은 정상실행
myModule._data; // 이부분은 return이 없으니까 에러
myModule._add(); // 역시 returen 없어서 에러

// let myModule = {
//     data:[],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     },
// };

// myModule.render();