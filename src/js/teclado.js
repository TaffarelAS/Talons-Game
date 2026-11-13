const SETA_ESQUERDA = 'a'
const SETA_DIREITA = 'd'
const SETA_CIMA = 'w'
const SETA_BAIXO = 's'

function Teclado(elemento) {
    this.elemento = elemento

    this.pressionadas = []

    var teclado = this
    elemento.addEventListener('keydown', function(evento){
        teclado.pressionadas[evento.key] = true
    }) 
    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.key] = false
    }) 
}

Teclado.prototype = {
    pressionada: function(tecla){
        return this.pressionadas[tecla]
    }
}