const open = document.querySelector('#openmodal')
const modal = document.querySelector('.modal')
const cerrar1 = document.querySelector('#cerrar')
const cerrar2 = document.querySelector('#enviar')
const asunto = document.querySelector('#asunto')
const descripción = document.querySelector('#descripción')

openmodal.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.add('modal--show')
})


cerrar1.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.remove('modal--show')
    asunto.value = '';
    descripción.value = '';
})

cerrar2.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.remove('modal--show')
    asunto.value = '';
    descripción.value = '';
})
