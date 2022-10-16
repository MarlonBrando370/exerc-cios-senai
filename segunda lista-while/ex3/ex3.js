function listaNome()
{

    var nom1 = document.querySelector('input#nome1').value;

    var nom2 = document.querySelector('input#nome2').value;

    var nom3 = document.querySelector('input#nome3').value;

    var nom4 = document.querySelector('input#nome4').value;

    var nom5 = document.querySelector('input#nome5').value;
    var res = document.querySelector('#resul')

    var nomes=[
       nom1, nom2, nom3, nom4, nom5
    ]
    

    //var c = 0;
    //while(c <= 4){
  
   //nomes.push[c]
    //c++
   // }
    res.innerHTML=nomes

}