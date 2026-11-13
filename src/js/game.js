var canvas = document.getElementById('canvas-anim')
var context = canvas.getContext('2d')

var posicaoX = 0
var posicaoY = 100

const img = new Image()
img.src = '/public/harpy.png'

img.onload = function () {
    desenhar();
};

var teclado = new Teclado(document)

requestAnimationFrame(animar)
function animar() {
    const passo = 5

    // Eixo X
    if (teclado.pressionada(SETA_ESQUERDA)) {
        posicaoX -= passo
    } else if (teclado.pressionada(SETA_DIREITA)) {
        posicaoX += passo
    }

    // Eixo Y

    if (teclado.pressionada(SETA_CIMA)) {
        posicaoY -= passo
    } else if (teclado.pressionada(SETA_BAIXO)) {
        posicaoY += passo
    }

    desenhar();
    requestAnimationFrame(animar)
}

function desenhar() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    if (img.complete) {
        context.drawImage(img, posicaoX, posicaoY, 40, 40)
    }

}