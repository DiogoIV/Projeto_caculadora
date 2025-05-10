const numerocal = [...document.querySelectorAll('.butao')]
const som = document.getElementById('som')
const mult = document.getElementById('mult')
const sub = document.getElementById('sub')
const div = document.getElementById('div')
const res = document.querySelector('#res_calculos')

const call = {
    soma: som.innerHTML,
    multi: mult.innerHTML,
    menos: sub.innerHTML,
    dividir: div.innerHTML

}

class calculadora {
    constructor(somar, multiplicar, subtrair, dividir) {
        this.somar = somar
        this.multiplicar = multiplicar
        this.subtrair = subtrair 
        this.dividr = dividir
    }
}

class calculos extends calculadora {
    constructor (somar, multiplicar,  subtrair, dividir) {
        super(somar, multiplicar,  subtrair, dividir)
    }
}

const c1 = new calculos(call.soma, call.multi, call.menos, call.dividir)



