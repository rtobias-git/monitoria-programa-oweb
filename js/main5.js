function ler(id) {
  let valor;
  valor = document.getElementById(id).value;
  return valor;
}

function converterParaReal(dolar, cotacao) {
  let valorEmReal;

  valorEmReal = dolar * cotacao;

  return valorEmReal;
}

function exibir(saida) {
  alert(saida);
}

function main() {
  let dolar, cotacao, valorEmReal;

  dolar = parseFloat(ler("qtddolar"));
  cotacao = parseFloat(ler("cotacao"));

  valorEmReal = converterParaReal(dolar, cotacao);

  exibir(valorEmReal);
}
