let mensajesDeError=[]
// todo se ejecuta cuando el DOM se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    // selecciona el formulario del dom
    const formIniciarSesion = document.querySelector('.formIniciarSesion');

    // -----------------------------------------------------------------
    // funcion mostrarError
    // const input = document.querySelector('#password')
    // const mensaje = "campo obligatorio"
    const mostrarError = (input, mensaje) => {
        // accedemos al div padre
        if(!mensajesDeError.includes(mensaje)){
        const divPadre = input.parentNode;
        // crea un div para mostrar el mensage
        const mensajeError=document.createElement('p');
        //le agrego el diseño de error al mensage
        mensajeError.classList.add('error-text','error');
        mensajeError.innerText = mensaje;
        // agrega el div error al elemento padre
        divPadre.appendChild(mensajeError);
        /* agrego el mensage de error a la lista de mensages 
        para que no se repita el mensage  */
        mensajesDeError.push(mensaje)
        }
    }
    
    // --------------------------------------------------------------
    //funcion eliminar mensaje de error
    const eliminarError = input => {
        // encontrar el elemento padre del campo
        const divPadre = input.parentNode;
        const pError= divPadre.querySelector('p');
        //elimino de la lista el mesage que se estaba mostrando
        mensajesDeError.splice(mensajesDeError.indexOf(pError.innerText), 1)
        // elimino el nodo p que muestra el error
        pError.remove();
    }
    
    // ----------------------------------------------------------------
    //funcionalidad para corroborar si los campos estan completos
    formIniciarSesion.querySelectorAll('input').forEach(input =>{
     
        //se activa cuando el valor de un elemento del formulario cambia y se sale del elemento
        input.addEventListener('change',()=>{
            //obtener el valor del campo seleccionado
            const valor = input.value.trim();//elimina cualquier espacio en blanco al principio y al final del valor obtenido.
            if(valor !== '' ){
                eliminarError(input)
            }
        })
    })
    // ----------------------------------------------------------------
     // Función para validar un correo electrónico utilizando una expresión regular
     function isEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);//devuelve true si la cadena coincide con el patrón de la expresión regular
    }
    
    // funcion para validar el campo de email
    function validarEmail(campoId, mensaje) {
        // obtenemos elemento mediante id
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();
        // si el campo esta vacio
        
        if (email === '') {
            //establecemos mensaje de error
            mostrarError(campo, 'el correo electronico es obligatorio');
            // indicamos que la validacion ha fallado
            return false
        } else if (!isEmail(email)) {
            //establecemos mensaje de error 
            mostrarError(campo, mensaje);
            // indicamos que la validacion ha fallado
            return false
        }else{
            // si es valido eliminamos cualquier error
            eliminarError(campo);
            // indicamos que la validacion es exitosa
            return true
        }
        
    }

    function validarCampo(campoId, mensaje) {
        // console.log(typeof campoId);
        const campo = document.getElementById(campoId);
        // console.log(campo);
        const value = campo.value.trim();

        if (value == '') {
            mostrarError(campo, mensaje);
            return false;//indicamos que la validacion fallo
        } else {
            eliminarError(campo)
            return true;//indicamos que la validacion ha sido exitosa
        }
    }
    // --------------------------------------------------------------------------------
    // funcion para validar el formulario
    const validarFormulario = () => {
        let validar = true;

        // validar campo email
        validar = validarEmail('email', 'el correo electronico no es valido') && validar;
        // validar contraseña
        validar = validarCampo('password', 'la contraseña es obligatoria') && validar;

        return validar;

    }
    // ----------------------------------------------------------------------------------
    // agregar un evento de escucha para cuando se envia el formulario
   formIniciarSesion.addEventListener('submit', event => {
        event.preventDefault();
        if (!validarFormulario()) {
            // mensaje no valido
            event.preventDefault()//evita que el formulario se envie
            console.log("El formulario no es valido");
        } else {
            event.preventDefault();
            console.log("Formulario enviado...");
        }
    })
})
