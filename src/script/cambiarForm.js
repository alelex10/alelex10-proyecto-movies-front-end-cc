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
    form.querySelectorAll('p').forEach(p=>{
      p.remove()
    })
  })
})
