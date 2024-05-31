
// todo se ejecuta cuando el DOM se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    // selecciona el formulario del dom
    const seccionForms = document.querySelector('.forms')
    const forms = seccionForms.querySelectorAll('form');

    // -----------------------------------------------------------------
    // funcion mostrarError
    const mostrarError = (input, mensaje) => {
        
        if (!mensajeRepetido(input, mensaje)) {
            // accedemos al div padre
            const divPadre = input.parentNode;
            // crea un p para mostrar el mensage
            const mensajeError = document.createElement('p');
            //le agrego el diseño de error al mensage
            mensajeError.classList.add('error-text', 'error');
            mensajeError.innerText = mensaje;
            // agrega el div error al elemento padre
            divPadre.appendChild(mensajeError);
        }
    }
    const mensajeRepetido = (input, mensage) => {
        repetido = false
        const divPadre = input.parentNode;
        divPadre.querySelectorAll('p').forEach(p => {
            if(p.innerText == mensage){
                repetido = true;
            }
        })
        return repetido;
    }
    // --------------------------------------------------------------
    //funcion eliminar mensaje de error
    const eliminarError = (input, mensage = '') => {
        const divPadre = input.parentNode;
        if (mensage != '') {
            divPadre.querySelectorAll('p').forEach(p=>{
                if(p.innerText==mensage){
                    p.remove()
                }
            })
        } else {
            divPadre.querySelector('p').remove();
        }
        // encontrar el elemento padre del campo

        //elimino la lista de mensajes de error
    }

    // ----------------------------------------------------------------
    //funcionalidad para corroborar si los campos estan completos
    forms.forEach(form => {
        form.querySelectorAll('input').forEach(input => {
            //se activa cuando el valor de un elemento del formulario cambia y se sale del elemento
            input.addEventListener('change', () => {
                //obtener el valor del campo seleccionado
                const valor = input.value.trim();//elimina cualquier espacio en blanco al principio y al final del valor obtenido.
                if (valor !== '') {
                    eliminarError(input)
                }
            })
        })
    })

    // ----------------------------------------------------------------
    // Función para validar un correo electrónico utilizando una expresión regular
    function isEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);//devuelve true si la cadena coincide con el patrón de la expresión regular
    }

    // funcion para validar el campo de email
    function validarEmail(inputClass, mensaje, form) {
        // obtenemos elemento mediante id
        const campo = form.querySelector(inputClass);
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
        } else {
            // si es valido eliminamos cualquier error
            eliminarError(campo);
            // indicamos que la validacion es exitosa
            return true
        }

    }

    function validarCampo(inputClass, mensaje, form) {
        // console.log(typeof campoId);
        const campo = form.querySelector(inputClass);
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

    function validarContrasenia(inputClass, form) {
        const campo = form.querySelector(inputClass);
        const password = campo.value;
        if (password.length < 8) {
            mostrarError(campo, "Debe tener mas de 8 caracteres");
        } else {
            eliminarError(campo, "Debe tener mas de 8 caracteres")
        }
        if (!/[a-z]/.test(password)) {
            mostrarError(campo, "Incluya almenos una minuscula");
        } else {
            eliminarError(campo, "Incluya almenos una minuscula")
        }

        if (!/[A-Z]/.test(password)) {
            mostrarError(campo, "Incluya almenos una Mayuscula");
        } else {
            eliminarError(campo, "Incluya almenos una Mayuscula")
        }

        if (!/[0-9]/.test(password)) {
            mostrarError(campo, "Debe contener un numero");
        } else {
            eliminarError(campo, "Debe contener un numero")
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            mostrarError(campo, "Debe tener un caracter especial");
        } else {
            eliminarError(campo, "Debe tener un caracter especial")
        }

    }
    // --------------------------------------------------------------------------------
    // funcion para validar el formulario
    const validarFormulario = (form) => {
        let validar = true;

        // validar campo email
        validar = validarEmail('.email', 'el correo electronico no es valido', form) && validar;
        // validar contraseña
        if (form.classList.contains('formRegistrarse')) {
            validar = validarCampo('.nombre', 'ingresa un nombre', form) && validar;
            validar = validarContrasenia('.new-password', form)
            validar = validarCampo('.confirm_password', 'reingresa contraseña', form)
        } else {
            validar = validarCampo('.password', 'completar campo', form) && validar;
        }
        return validar;

    }
    // ----------------------------------------------------------------------------------
    // agregar un evento de escucha para cuando se envia el formulario
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            if (!validarFormulario(form)) {
                // mensaje no valido
                event.preventDefault()//evita que el formulario se envie
                console.log("El formulario no es valido");
            } else {
                event.preventDefault();
                console.log("Formulario enviado...");
            }
        })
    })
})
