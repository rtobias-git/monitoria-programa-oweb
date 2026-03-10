function ler(id) {
  let valor;
  valor = document.getElementById(id).value;
  return valor;
}

function calcularAreaQuadrado(lado) {
  let area;

  area = lado * lado;

  return area;
}

function exibir(saida) {
  alert(saida);
}

function main() {
  let lado, area;

  lado = parseInt(ler("lado"));

  area = calcularAreaQuadrado(lado);

  exibir(area);
}
