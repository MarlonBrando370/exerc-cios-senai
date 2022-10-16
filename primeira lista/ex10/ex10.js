var valorA = Number(prompt('Digite o valor do lado A '));
var valorB = Number(prompt('Digite o valor do lado B '));
var valorC = Number(prompt('Digite o valor do lado C '));

if(valorA != valorB && valorB !=valorC && valorA !=valorC){
    alert('Tipo de trângulo: ESCALENO');
}else if( valorA != valorB && valorB == valorC || valorA == valorB && valorB != valorC || valorA == valorC && valorC != valorB){
    alert('Tipo de trângulo: ISÓSCELES ');
}else if(valorA == valorB && valorB == valorC && valorA == valorC){
    alert('Tipo de trângulo: EQUILATERO');
}
