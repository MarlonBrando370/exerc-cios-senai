function calcula()
{
var res = document.querySelector('#resu');

var nota1 = document.querySelector('#n1').value;
var nota2 = document.querySelector('#n2').value;
var nota3 = document.querySelector('#n3').value;

var media = ((nota1*2)+(nota2*3)+(nota3*5))/10;

res.innerHTML="Média:"+media;
  
}
