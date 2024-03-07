let notas = [7, 6, 3, 5];

function calcularMedia(nota1, nota2, nota3, nota4) {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
}

function verificarAprovacao(media) {
  return media >= 5 ? "Aprovado" : "Reprovado";
}

console.log(
  verificarAprovacao(calcularMedia(notas[0], notas[1], notas[2], notas[3]))
);

/*-----------------------------///-------------------------*/

function fatorial(numero) {
  let resultado = numero;
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    while (numero > 1) {
      numero--;
      resultado *= numero;
    }
    return resultado;
  }
}

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

/*-----------------------------///-------------------------*/

function converterDolarParaReal(valorEmDolar, cotacaoDolar) {
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

let cotacaoDolar = 4.8;
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar, cotacaoDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

/*-----------------------------///-------------------------*/

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);

  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

  /*-----------------------------///-------------------------*/

  function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }

    let contador = 1;
    while(contador <= 10) {
        let tabuada = numero * contador;
        console.log(`${numero} x ${contador} = ${tabuada}`);
        contador++;
    }
  }
  mostrarTabuada(numero);

/*-----------------------------///-------------------------*/

  function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);