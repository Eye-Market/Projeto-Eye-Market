function abrirBot(){
    var audio = new Audio("../resources/sound/som.mp3");
    audio.oncanplaythrough = function () {
        audio.play();
    }

    audio.pause();
    // 

    bot_help.style.display = "block";
}

function fecharBot(){
    bot_help.style.display = 'none';
}

function opcao1(){
    msgFirst.style.display = 'none';
    escolha.style.display = 'none';
    opcaoOne.style.display = 'flex';
    escolha2.style.display = 'flex';
}

function opcao2(){
    msgFirst.style.display = 'none';
    escolha.style.display = 'none';
    opcaoTwo.style.display = 'flex';
    escolha3.style.display = 'flex';
}

function voltar(){
    msgFirst.style.display = 'flex';
    escolha.style.display = 'flex';
    opcaoOne.style.display = 'none';
    escolha2.style.display = 'none';
    opcaoTwo.style.display = 'none';
    escolha3.style.display = 'none';
}