function calcula()
{
var res = document.querySelector('#resu');

var num1 = Number( document.querySelector('#n1').value);
var num2 = Number( document.querySelector('#n2').value);
var num3 = Number( document.querySelector('#n3').value);

var numeros =[
    num1, num2, num3
]

var soma =0 ;
 
var segundoMaior = 0
var maiorN = 0;



for(c = 0; c < numeros.length; c++ ){
    var numero = numeros[c];
    if(numero > maiorN){

        maiorN = numero;
    }
      
}

numeros.sort(function ordenar(a,b){
    return a-b;
})
numeros.pop()

res.innerHTML=maiorN

for(i = 0; i < numeros.length; i++){

    var seN = numeros[i];
    if(seN > segundoMaior){

        segundoMaior = seN;
    }
}
res.innerHTML=maiorN + segundoMaior
soma = Number( maiorN + segundoMaior)

  
}

