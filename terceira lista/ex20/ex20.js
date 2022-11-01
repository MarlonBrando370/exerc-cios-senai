
function cadastros(){



    var alt1 =  document.querySelector('#altura1').value;
    var matri1 = document.querySelector('#inpu_matri1').value;

    var alt2 = document.querySelector('#altura2').value;
    var matri2  = document.querySelector('#inpu_matri2').value;

    var alt3 = document.querySelector('#altura3').value;
    var matri3  = document.querySelector('#inpu_matri3').value;

    var alt4 = document.querySelector('#altura4').value;
    var matri4  = document.querySelector('#inpu_matri4').value;

    var alt5 = document.querySelector('#altura5').value;
    var matri5 = document.querySelector('#inpu_matri5').value;

    var alt6 = document.querySelector('#altura6').value;
    var matri6 = document.querySelector('#inpu_matri6').value;

    var alt7 = document.querySelector('#altura7').value;
    var matri7 = document.querySelector('#inpu_matri7').value;

    var alt8 = document.querySelector('#altura8').value;
    var matri8 = document.querySelector('#inpu_matri8').value;

    var alt9 = document.querySelector('#altura9').value;
    var matri9 = document.querySelector('#inpu_matri9').value;

    var alt10 = document.querySelector('#altura10').value;
    var matri10 = document.querySelector('#inpu_matri10').value;
    

    var maiAltura = document.querySelector('#pMai_Altura');

    var maiMatricula = document.querySelector('#pMai_Matricula');

    var menorAltura = document.querySelector('#pMenor_Altura');

    var menorMatricula = document.querySelector('#pMenor_Matricula');




    var matricula=[
    {
        altura:alt1,
        mat:matri1
    },
    {
        altura:alt2,
        mat:matri2
    },

    {
        altura:alt3,
        mat:matri3
    },
    {
        altura:alt4,
        mat:matri4
    },
    {
        altura:alt5,
        mat:matri5
    },
    {
        altura:alt6,
        mat:matri6
    },
    {
        altura:alt7,
        mat:matri7
    },
    {
        altura:alt8,
        mat:matri8
    },
    {
        altura:alt9,
        mat:matri9
    },
    {
        altura:alt10,
        mat:matri10
    }



    ]


    //console.log(matricula)
    var maiorAltura = 0;
    for(i=0; i<matricula.length; i++){
        var cadastro = matricula[i].altura
    //console.log( matricula[i].altura)
    if(maiorAltura < cadastro){
        maiorAltura = cadastro
    }


    }

    for(c=0; c<matricula.length; c++){
        var cadaMatricula = matricula[c].altura
        if(cadaMatricula == maiorAltura){
            var matriculaSelecionada = matricula[c].altura
            var teste = matricula[c].mat
        }
    }


   


    var posicao = matricula[0].altura
    for(c=0; c< matricula.length; c++){
    var menorCadastro = matricula[c].altura;
    
    
    
    if(menorCadastro < posicao){
        posicao = menorCadastro
    }



    }
    for(c=0; c < matricula.length; c++){
        var menorPosição = matricula[c].altura
        if(menorPosição == posicao){
            var menorAlt = matricula[c].altura;
            var matMenor = matricula[c].mat
        }
    }


    maiAltura.innerHTML=(`Altura do aluno mais alto: ${matriculaSelecionada}`);

    maiMatricula.innerHTML=(`Matrícula do aluno mais alto${teste}`);

    menorAltura.innerHTML=(`Altura no aluno mais baixo: ${menorAlt}`);
    menorMatricula.innerHTML=(`Matrícula do aluno mais baixo: ${matMenor}`)

    
 


}

