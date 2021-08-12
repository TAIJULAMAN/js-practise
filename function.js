// function declaration.
function startfan(fan) {
    console.log('fan on koro', fan);
}
// function call.
startfan(20);
//mainly console er ta e show kore
// but call korle,value and ja chawa hoi ta pawa jai
// pore fan er value call korsi,ti fan er value o asce.

// example 1
function singaradaw(taka) {
    console.log('taka dew singara khabo', taka);
}
singaradaw(100);
// arekvave call kora jay
var money = 100;
singaradaw(money);

// ......................
// example 2
// ......................

function singaradaw(taka) {
    console.log(taka);
    var singara = 10;
    var singaraQuantity = taka / singara;
    return singaraQuantity;
}
console.log(singaradaw(100));
// .......................................





