var sal = Number(prompt('Informe o salário do funcionário'));
var h = Number(prompt('Informe as horas extras trabalhadas ao longo do mês:'));
var valorH = Number(prompt('Informe o valor da hora trabalhada'));

var horasEx = valorH*h;
var salBruto = sal + horasEx;
var fgts = (salBruto*11)/100
var inss;

if(salBruto <= 900){
    inss = 0;
    alert(`Salário bruto    ${salBruto} \n

    ( – ) INSS (0%)   : R$  ${inss} \n
     
    FGTS ( 11%)     : R$  ${fgts} (Não é descontado da folha de pagamento) \n
    
    Total de descontos   ${inss} \n
    Salário Líquido      :R$ ${salBruto-inss}`);
}else if(salBruto > 900 && salBruto <=1500){
    inss = (salBruto *5)/100;

    alert(`Salário bruto    ${salBruto} \n

    ( – ) INSS (5%)   : R$  ${inss} \n
     
    FGTS ( 11%)     : R$  ${fgts} (Não é descontado da folha de pagamento) \n
    
    Total de descontos  :R$ ${inss} \n
    Salário Líquido      :R$ ${salBruto-inss}`);
}else if(salBruto >1500 && salBruto<=2500){
    inss =(salBruto*10)/100;
    alert(`Salário bruto    ${salBruto} \n

    ( – ) ISSS (10%)   : R$  ${inss} \n
     
    FGTS ( 11%)     : R$  ${fgts} (Não é descontado da folha de pagamento) \n
    
    Total de descontos  :R$ ${inss} \n
    Salário Líquido      :R$ ${salBruto-inss}`);
}else{
    inss = (salBruto*20)/100;

    alert(`Salário bruto    ${salBruto} \n

    ( – ) ISSS (20%)   : R$  ${inss} \n
     
    FGTS ( 11%)     : R$  ${fgts} (Não é descontado da folha de pagamento)\n
    
    Total de descontos  :R$ ${inss} \n
    Salário Líquido      :R$ ${salBruto-inss}`);
}

