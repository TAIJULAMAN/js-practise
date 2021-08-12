function milesTokilometers(miles) {
    var kilometers = miles * 1.60934;
    return kilometers;
}
console.log(milesTokilometers(15));
console.log(parseInt(milesTokilometers(15)));
console.log(parseFloat(milesTokilometers(15)));
console.log(parseFloat(milesTokilometers(15).toFixed(3)));