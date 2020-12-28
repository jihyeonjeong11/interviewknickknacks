// using this inside an object

const circle = {
    radius: 10,
    circumference: function() {
        return (2 * Math.PI * this.radius);
    },
    diameter() {
        return (this.radius * 2)
    },
    area: () => {
        return (Math.PI * Math.PI * this.radius);
    }
}

console.log(circle.area());
// function이므로 this는 글로벌 this, radius가 없으므로 NaN
console.log(circle.diameter());
// method이므로 this는 circle obj라 맞음.
console.log(circle.circumference());
// arrow func이므로 this는 circle obj, 맞음./