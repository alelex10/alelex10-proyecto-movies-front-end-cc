

// Select elements
const sectionForm=document.querySelectorAll('form');
sectionForm.forEach(form=>{
  // selecciono el ultimo elemento de cada form
  //serian los botones de intecambio del form
  form.querySelector(':last-child > input').addEventListener('click',()=>{
    //selecciono al elemento padre, luego al form oculto y reemplaso oculto por mostrar
    form.parentNode.querySelector('.ocultar').classList.replace('ocultar', 'mostrar')
    //reemplaso el estado del form mostrado por ocultar
    form.classList.replace('mostrar', 'ocultar')
    //elimino la lista de mensajes de error
    // mensajesDeError.slice(0,mensajesDeError.length);
  })
})


/* function validatePassword(password) {
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character";
  }
  return "Password is valid";
}

// Example usage:
let password = prompt("Enter a password:");
let result = validatePassword(password);
console.log(result);
 */