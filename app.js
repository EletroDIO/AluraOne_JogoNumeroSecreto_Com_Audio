let numeroMaximo;
let textoH1 = "Jogo do número secreto ";
let textoP = `Escolha um número de 1 a `;
let maximoInput = document.querySelector('input[type="number"]');
let contador = 1;
let numeroAleatorio;
let numerosSorteados = [];
let chute = document.querySelector("#numero");
let botaoNovo = document.getElementById("reiniciar");
let botaoChutar = document.getElementById("iniciar");
let ajustarMaximo = document.querySelector('input[type="range"]');

botaoNovo.setAttribute('disabled', true);

function exibirTextoNaTela(tag, texto) {
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate: 1})
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
  numeroAleatorio = parseInt(Math.random() * numeroMaximo) + 1;
  if (numerosSorteados.includes(numeroAleatorio)) {
      return gerarNumeroAleatorio();
  } else {
      numerosSorteados.push(numeroAleatorio);
      //exibirTextoNaTela("h1", textoH1);
      return numeroAleatorio;
  }
} 

ajustarMaximo.addEventListener("click", () => {
   numeroMaximoAjustes();
   
});

function numeroMaximoAjustes(){
    numeroMaximo = ajustarMaximo.value;
    if(numerosSorteados.length < numeroMaximo) {
    gerarNumeroAleatorio();
   // exibirTextoNaTela("h1", textoH1 + numerosSorteados);
    exibirTextoNaTela("p", textoP + numeroMaximo);
    maximoInput["max"] = numeroMaximo;
    } else {
      numerosSorteados.length = 0;
     // exibirTextoNaTela("h1", textoH1 + numerosSorteados);
    }
}

function iniciarJogo() {
  exibirTextoNaTela("h1", textoH1);
  limparCampo();
  numeroMaximoAjustes();
}

iniciarJogo();

botaoChutar.addEventListener("click", () => {
  if (chute.value != 0) {
    verificarChute();
  } else {
    exibirTextoNaTela("p"," Escolha um número até " + ajustarMaximo.value);
    console.log(numeroAleatorio);
    chute.focus();
  }
});

function mensagemContador() {
  let mensagemTentativas =
    contador == 1
      ? "Você descobriu o número secreto de primeira tentativa."
      : `Você descobriu o número secreto com ${contador} tentativas.`;
  return mensagemTentativas;
}


function verificarChute() {
  if (numeroAleatorio === parseInt(chute.value)) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagemContador());
    botaoNovo.disabled = false;
    botaoChutar.setAttribute('disabled',"disabled");
    maximoInput.toggleAttribute("disabled");
  } else {
    if (chute.value > numeroAleatorio) {
      exibirTextoNaTela("p", `O número é menor que: ${chute.value}`);
    } else {
      exibirTextoNaTela("p", `O número é maior que: ${chute.value}`);
    }
    contador++;
  }
  limparCampo();
}

function limparCampo() {
  chute.value = "";
  chute.focus();
}

botaoNovo.addEventListener("click", () => {
  numerosSorteados.length = 0;
  contador = 1;
  botaoNovo.disabled = true;
  botaoChutar.removeAttribute("disabled");
  maximoInput.toggleAttribute("disabled");
  iniciarJogo();

});

