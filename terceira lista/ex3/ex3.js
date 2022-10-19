function maiorOuMenor(){

    var n = document.querySelector('#num').value;
    var res = document.querySelector('#resul');

    if(n < 10){
        res.innerHTML='O valor digitado é menor que 10';
    }else if(n > 10){
        res.innerHTML='O valor digitado é maior que 10';
    }else{
        res.innerHTML='O valor digitado é igual a 10';
    }

}



