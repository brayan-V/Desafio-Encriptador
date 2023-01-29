let textArea = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");
 
function validar(){
    let textoRecibido = textArea.value;
    let validandoTexto = textoRecibido.match(/^[a-z]/);
    if(!validandoTexto || validandoTexto===0){
        alert("Solo ingresar minusculas");
        location.reload();
        return true;
    }
}

 function btnEncriptar(){
   if(!validar()){
    encriptar(textArea.value);
   }

 }

 function encriptar(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    mensaje.value=texto;
    textArea.value="";
 }

 function btnDesencriptar(){
    desencriptar(mensaje.value);
    
 }

 function desencriptar(texto){
    texto = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    mensaje.value = texto;
    textArea.value="";
 }

 function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);   
 }
 