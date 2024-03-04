const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


form.addEventListener('submit', btnOnClick);

function btnOnClick (){
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado:  " + sumaInputs;
}