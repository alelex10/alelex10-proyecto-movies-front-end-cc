// Select elements
const sectionForm=document.querySelectorAll('form');
sectionForm.forEach(form=>{
  // selecciono el ultimo elemento de cada form
  //serian los botones de intecambio del form
  form.querySelector(':last-child > input').addEventListener('click',()=>{
    form.parentNode.querySelector('.ocultar').classList.replace('ocultar', 'mostrar')
    form.classList.replace('mostrar', 'ocultar')
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