/*

finish the following script to extendts the built in JS String object

*/

let str = "Can I use Google during the interview?";

String.prototype.flip = function () {
    let str = this; //this is String method. this scopes the variable str!
    return str.split("").reverse().join('');
}

console.log(str.flip());

