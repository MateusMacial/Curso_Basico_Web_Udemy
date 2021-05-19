function calcularMedia() {

    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    var media = total / qtd;
    //while(arguments[x]){
    while (typeof arguments[x] === 'number') {
        total += arguments[x];
        x++
    }

    return (total / qtd).toFixed(2);
}