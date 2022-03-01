const entradaDeTexto = document.querySelector('.entradaDeTexto input');

const botaoCriptografar = document.querySelector('.entradaDeTexto button');

const botaoDescriptografar = document.querySelector('#descript');
  
const saidaDeTexto = document.querySelector('.saidaDeTexto input');

const botaoCopiar = document.querySelector('.saidaDeTexto button');

botaoCriptografar.addEventListener('click', criptografarTexto);
botaoDescriptografar.addEventListener('click', descriptografarTexto);
botaoCopiar.addEventListener('click', copiar);



function criptografarTexto() {

    var capturar = entradaDeTexto.value;              
    criptografar = capturar.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');         
    saidaDeTexto.value = criptografar;
    entradaDeTexto.value = "";
}


function descriptografarTexto() {
    var capturar = entradaDeTexto.value;              
    descriptografar = capturar.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');         
    saidaDeTexto.value = descriptografar;
    
} 

 
function copiar() {
    navigator.clipboard.writeText(document.querySelector('.saidaDeTexto input').value);
}




           
                       
    
        



