
    var res = document.querySelector('.input_res');
    var body = document.querySelector('#body');
    var check = document.querySelector('#check')

function option(op){
    var opButton = op
    res.value += opButton
}

function rese(){
    res.value = ""
}

function delet(){
    var re = document.querySelector('#inpu_res').value;
    res.value = re.substring(0, re.length -1)

}

function calc(){
    var calculate = document.querySelector('#inpu_res').value;
    calculate = eval(calculate);
    if(calculate == undefined){
        res.value = ""
    }else{

        res.value = calculate;
    }
}

function tema(){
if(check.checked == true)
{
    body.classList.remove('theme_1');
    body.classList.add('theme_2');
}else if(check.checked == false)
{
    body.classList.remove('theme_2');
    body.classList.add('theme_1');
}
}