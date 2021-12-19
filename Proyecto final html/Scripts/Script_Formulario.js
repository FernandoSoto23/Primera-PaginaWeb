function iniciar(){
    edad = document.getElementById("miedad");
    edad.addEventListener("change",cambiarrango,false);
}
function cambiarrango(){
    var salida = document.getElementById("rango");
    salida.innerHTML =edad.value;
}

function ir(){
    
    if(document.informacion.mail.value != '' && document.informacion.comentarios.value != '')
    {
        alert("Gracias por enviarnos tus comentarios, tomaremos en cuenta tu opinion e intentaremos mejorar nuestra calidad de servicio");
        window.location = "../index.html";
       
    }
    else{
        alert("por favor llenar los campos correctamente")
    }
    
}
window.addEventListener('onclick',ir,false)
window.addEventListener('load',iniciar,false);
