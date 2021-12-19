alert("Nota: Esta pagina es de prueba, el correo para ingresar es: CorreoPrueba@gmail.com Contraseña: contraseña1234");
function go(){

    if (document.form.password.value=='contraseña1234' && document.form.login.value=='CorreoPrueba@gmail.com'){ 
            document.form.submit(); 
            alert("ingresaste correctamente colega");
           
            window.location = "../index.html";

        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 

