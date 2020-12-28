//create an example of a callback func with multiple params

let ftw = function(name) {
    console.log('depending on the season', name, 'is a good guy');
};

let wtf = function(name) {
    console.warn('depending on the season', name, 'is a bad guy');
};


let callback = function(goodfunc, badfunc, person){
    let delay = Math.floor(Math.random() * 1000);
    if(person.isGood){
        setTimeout(goodfunc, delay, person.name);
    } else {
        setTimeout(badfunc, delay, person.name);
    }
}

let app = (function(){
  const castiel = {name: 'Castiel', isGood: true};
  const crowley = {name: 'Crowley', isGood: false};
  //callback here
  callback(ftw, wtf, castiel);
  callback(ftw, wtf, crowley);


})();
