const carrusel = document.querySelector("#Imágenes")
const imagen = document.querySelector("#Imágenes").querySelectorAll("#img")

var current = 0
function update(value) {
    if (current+value >= 0 && current+value < imagen.length) current += value
    var number = imagen[current].offsetLeft
    carrusel.scrollLeft = parseInt(Math.min(Math.max(number, 0), carrusel.scrollWidth))
}