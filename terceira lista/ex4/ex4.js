function negativoOuPositivo(){

    var n = document.querySelector('#num').value;
    var res = document.querySelector('#resul');

    if(n < 0){
        res.innerHTML='O valor digitado é negativo';
    }else{
        res.innerHTML='O valor digitado é positivo';
    }
}