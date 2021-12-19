function ir(){
    
    if(document.fmail.mail.value != '')
    {
        alert("Enviaremos un email al correo vinculado a la cuenta, por favor revisa tu bandeja de entrada, en dado caso que no aparezca verifica tu correo no deseado.");
        window.location = "../index.html";
    }
    else{
        alert("Por favor ingresa un correo valido");
    }
}
window.addEventListener('onclick',ir,false)