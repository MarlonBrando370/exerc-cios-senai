function calculaMedia(){

var n1 = Number( document.querySelector ('#num1').value);
var n2 = Number( document.querySelector('#num2').value);
var res = document.querySelector('#resul');
var txtMed = document.querySelector('#medi');
var media = (n1+n2)/2


if(media >= 6){
    txtMed.innerHTML=`Média: ${media}`;
    res.innerHTML=`APROVADO`;
    res.style.backgroundColor='green';
}else{
    txtMed.innerHTML=`Média: ${media}`;
    res.innerHTML=`REPROVADO`;
    res.style.backgroundColor='red';
}

}