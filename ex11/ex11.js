var angulo1 = Number(prompt('Insira o valor do primeiro ângulo'));
var angulo2 = Number(prompt('Insira o valor do segundo ângulo'));
var angulo3 = Number(prompt('Insira o valor do tereiro ângulo'));

if(angulo1 == 90 || angulo2 == 90 || angulo3 ==90){
    
       alert('Tipo: TRIÂNGULO RETÂNGULO');
}else if(angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
       alert('Tipo: TRIÂNGULO ACUTÂNGULO');
}else if(angulo1 > 90 && angulo2 > 90 && angulo3 > 90){
       alert('Tipo: TRIÂNGULO OBTUSÂNGULO');
    }
