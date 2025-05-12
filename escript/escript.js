const numerocal = [...document.querySelectorAll('.butao')]
const operadores = [...document.querySelectorAll('.butao_especial')]
const display = document.getElementById('res_calculos')
const tlimpar = document.getElementsByClassName("cl_butao")[0]

let limpar = true

numerocal.forEach((el) => {
    el.addEventListener('click', (event) => {
        if(limpar) {
            display.innerHTML = ""
            limpar = false
        } else {
            display.innerHTML += el.textContent
        }
        
    })
})

operadores.forEach((el) => {
    el.addEventListener('click', (event) => {
        
        display.innerHTML += event.target.innerHTML
    })
})

tlimpar.addEventListener('click', () => {
    display.innerHTML = '0'
})
