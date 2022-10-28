
  do{

  do{alert('Informe uma nota maior que 0 e menor que 10');
  
  var note1 = Number(prompt('Informe á primeira nota'));

  var note2 = Number(prompt('Informe a segunda nota'));

  }while(note1 < 0 || note1 > 10 || note2 < 0 || note2 > 10)

    var average = (note1+note2)/2;
    alert(`Sua média é ${average}`);
    //note1 =0;
    //note2 =0;
    //average =0;

    var conf = confirm('Deseja calcular outra média');


    //var note1 = Number(prompt('Informe á primeira nota'));

    //var note2 = Number(prompt('Informe a segunda nota'));

}while(conf == true)
    document.write('<h1>Obrigado por usar nosso sistema.<h1>')


    



