let sam = {
    castiel: 'mary'
}

let dean = {
    john: 'crowley',
    mary: 'chuck'
}

// 이중 되는것은?

console.log(dean[sam.castiel]); // 됨
console.log(dean.sam.castiel); // sam이 dean에 속하지 않으니 안됨
console.log(dean[sam['castiel']]); // string leteral이기 때문에 됨
console.log(dean[sam[castiel]]); // dean[sam[undefined]]이므로 안됨