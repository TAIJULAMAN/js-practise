// inche to feet
function incheTofeet(inche) {
    var feet = inche / 12;
    return feet;
}
console.log('1:', parseInt(incheTofeet(1000)));
console.log('2:', parseFloat(incheTofeet(500)));
console.log('3:', parseFloat(incheTofeet(1300).toFixed(1)));
