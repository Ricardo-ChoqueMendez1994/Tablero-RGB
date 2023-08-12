const inputRed = document.getElementById('red')
const inputGreen = document.getElementById('green')
const inputBlue = document.getElementById('blue')

const textRed = document.getElementById('text-red')
const textGreen = document.getElementById('text-green')
const textBlue = document.getElementById('text-blue')

let red = inputRed.value
let green = inputGreen.value
let blue = inputBlue.value

// Los valores que se le dan son los id de cada inputBlue, para asi poderle agregar el value correspondiente de cada inputBlue, en este caso los id red, green, blue 
textRed.innerText = red 
textGreen.innerText = green
textBlue.innerText = blue

function updateColor(red, green, blue) {
    const colorRGB = `rgb(${red}, ${green}, ${blue})`
    document.body.style.backgroundColor = colorRGB
}

// Para actualizar red (rojo)
inputRed.addEventListener('change', () => {
    red = inputRed.value
    textRed.innerText = red
    updateColor(red, green, blue)
})

// Para actualizar green (verde)
inputGreen.addEventListener('change', (e) => {
    green = e.target.value
    textGreen.innerText = green
    updateColor(red, green, blue)
})

// Para actualizar blue (azul)
inputBlue.addEventListener('change', (e) => {
    blue = e.target.value
    textBlue.innerText = blue
    updateColor(red, green, blue)
})