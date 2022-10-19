function calc(){

var tF = document.querySelector('#vF').value;

var res = document.querySelector('#resu')

var tC = ((tF-32)/9)*5;
res.innerHTML= tC.toFixed(1)+"°C"


}
