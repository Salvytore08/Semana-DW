const open = document.querySelector('#openmodal')
const modal = document.querySelector('.modal')
const cerrar1 = document.querySelector('#cerrar')
const cerrar2 = document.querySelector('#enviar')

openmodal.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.add('modal--show')
})


cerrar1.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.remove('modal--show')
})

cerrar2.addEventListener('click', (C)=>{
    C.preventDefault()
    modal.classList.remove('modal--show')
})