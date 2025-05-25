const numerocal = [...document.querySelectorAll('.butao')]
const operadores = [...document.querySelectorAll('.butao_especial')]
const display = document.getElementById('res_calculos')
const tlimpar = document.getElementsByClassName("cl_butao")[0]
const tigual = document.getElementById('tigual')
const copy = document.getElementById('copy')

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
            let valor = event.target.innerHTML
            limpar = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (valor == "x") {
                valor = "*"
            }
            display.innerHTML += event.target.innerHTML
        }   
        
    })
})

tlimpar.addEventListener('click', () => {
    limpar = false
    decimal = false
    display.innerHTML = '0'
})

tigual.addEventListener('click', () => {
    limpar = false
    decimal = false
    try {
        const expressao = display.innerHTML
        .replace(/[^0-9+\-*/.()]/g, '')     
        const res = eval(expressao)
        display.innerHTML=res
    } catch (erro)  {
        display.innerHTML = "erro"
        
    }
})


copy.addEventListener('click', ()=> {
    navigator.clipboard.writeText(display.innerHTML)
})
