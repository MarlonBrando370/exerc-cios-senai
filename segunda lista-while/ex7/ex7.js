function tabuada(){

    var n = document.querySelector('#number').value;
    var c = 0;
    while(c <= 10){
        document.write(`${c} x ${n} = ${c*n} </p>`);
        c++
    }
}