
 var cadastro=[

 ]
    
    

do{
    
     var nome = prompt("Registre um nome");
     cadastro.push(nome);
     cadastro.push('\n')
     var con = confirm('Deseja realizar um novo cadastro?');
    }while(con == true)

    

alert(cadastro);