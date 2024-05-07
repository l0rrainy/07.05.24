class Movimento {
    constructor () {

    }

    moverParaEsquerda() {
        console.clear();
        console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
        leftAvatar = getLeftStyle(imgAvatar);
        if (leftAvatar > posicaoEsquerdaInicial) {
            posicaoEsquerda -= parseInt(txtPixel.value);
            if (posicaoEsquerda < posicaoEsquerdaInicial) {
                posicaoEsquerda = posicaoEsquerdaInicial;
            }
            imgAvatar.style.left = posicaoEsquerda + "px";
        } else {
            console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
        }
        console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
    }
}