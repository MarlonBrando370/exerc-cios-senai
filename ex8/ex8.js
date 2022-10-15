var lados = Number(prompt('Digite a quantidade de lados'));



var area;



if(lados == 3)
{
    var tBase = Number(prompt('Digite o tamanho da base em cm', 'ex: 30'));

    var tAltura = Number(prompt('Digite a área da altura em cm ', 'Ex: 10'));

    area = (tBase*tAltura)/2;
    alert(`Tipo: Triângulo \n  Área${area}m² `);

  
}else   if(lados == 4)
{
    var qLado =Number(prompt('Digite o tamanho do lado em cm', 'Ex:10'));
    area = qLado*qLado;
    alert(`Tipo: Quadrado \n ${area}m²`);
}else if(lados == 5){
    var text = 'MDN';
    var url = 'https://www.youtube.com/';
    alert('Tipo: Pentágano')
}else if(lados < 3){
    alert('NÃO É UM POLÍGONO');
}else{
    alert('POLÍGONO NÃO IDENTIFICADO');
}

