var valor1 = 0;
var valor2 = 0;

function somar(valor1, valor2) {
  let resultado;
  resultado = valor1 + valor2;
  return resultado;
}

function subtrair(valor1, valor2) {
  let resultado;
  resultado = valor1 - valor2;
  return resultado;
}

function multiplicar(valor1, valor2) {
  let resultado;
  resultado = valor1 * valor2;
  return resultado;
}

function dividir(valor1, valor2) {
  let resultado;
  resultado = valor1 / valor2;
  return resultado;
}

function potencia(valor1, valor2) {
  let i,
    resultado = 1;
  for (i = 0; i < valor2; i++) resultado = resultado * valor1;
  return resultado;
}

function restoDivisao(valor1, valor2) {
  let resultado;
  resultado = valor1 % valor2;
  return resultado;
}

function maiorNumero(valor1, valor2) {
  let resultado;
  if (valor1 > valor2) resultado = valor1;
  else resultado = valor2;

  return resultado;
}

function media(valor1, valor2) {
  let resultado;

  resultado = (valor1 + valor2) / 2;

  return resultado;
}

function ler() {
  valor1 = parseFloat(document.getElementById("valor1").value);
  valor2 = parseFloat(document.getElementById("valor2").value);
}

function imprimir(resultado) {
  alert(resultado);
}

function Calcular() {
  let escolha;
  let resultado;
  escolha = document.getElementById("operacoes").value;
  ler();

  if (escolha == "soma") {
    resultado = somar(valor1, valor2);
    imprimir(resultado);
  } else if (escolha == "subtracao") {
    resultado = subtrair(valor1, valor2);
    imprimir(resultado);
  } else if (escolha == "multiplicacao") {
    resultado = multiplicar(valor1, valor2);
    imprimir(resultado);
  } else if (escolha == "divisao") {
    resultado = dividir(valor1, valor2);
    imprimir(resultado);
  } else if (escolha == "potencia") {
    resultado = potencia(valor1, valor2);
    imprimir(resultado);
  } else if (escolha == "resto") {
    resultado = restoDivisao(valor1, valor2);
    imprimir(resultado);
  } else if (escolha == "media") {
    resultado = media(valor1, valor2);
    imprimir(resultado);
  } else {
    resultado = maiorNumero(valor1, valor2);
    imprimir(resultado);
  }
}
