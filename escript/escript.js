const numerocal = [...document.querySelectorAll('.butao')]
const operadores = [...document.querySelectorAll('.butao_especial')]
const display = document.getElementById('res_calculos')
const tlimpar = document.getElementsByClassName("cl_butao")[0]
const tigual = document.getElementById('tigual')

let limpar = false
let decimal = false

numerocal.forEach((el) => {
    el.addEventListener('click', (event) => {
        limpar = false
        
        if (event.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true
                if(display.innerHTML =="0") {
                    display.innerHTML = "0,"
                } else {
                    display.innerHTML+=event.target.innerHTML
                }
            }            
        } else {
                if (display.innerHTML == "0") {
                    display.innerHTML = ""
                }
                display.innerHTML+=event.target.innerHTML
        }
        
        
    })
})

operadores.forEach((el) => {
    el.addEventListener('click', (event) => {
        if(!limpar) {
            limpar = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (display.innerHTML == "x") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += event.target.innerHTML
            }
        }   
        
    })
})

tlimpar.addEventListener('click', () => {
    limpar = false
    decimal = false
    display.innerHTML = '0'
})

tigual.addEventListener('click', ()=> {
    
})
