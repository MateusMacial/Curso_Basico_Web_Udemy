function calcularMedia() {

    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while (typeof arguments[x] === 'number') {
        total += arguments[x];
        x++
    }

    return (total / qtd).toFixed(2);
}

function random(num){
    var _num = num || 1;
    var numRandom = Math.random();
    numRandom = numRandom * _num;
    numRandom = Math.floor(numRandom);
    return numRandom;
}
