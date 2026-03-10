function ler(id) {
  let valor = parseFloat(document.getElementById(id).value);
  return valor;
}

function exibir(valor) {
  alert(valor);
}

// Crie uma função que receba o valor total de uma compra
// Calcule o valor final aplicando um desconto de 10%.
function calcularValorFinal(compra) {
  let valorTotal;
  valorTotal = compra + (compra * 10) / 100;

  return valorTotal;
}

function main() {
  let compra, totalCompra;

  compra = ler("compra");
  totalCompra = calcularValorFinal(compra);

  exibir(totalCompra);
}
