function ler(id) {
  let valor;
  valor = document.getElementById(id).value;
  return valor;
}

function exibir(saida) {
  alert(saida);
}

function areaCirculo(raio) {
  let area;

  area = 3.14 * (2 * raio);

  return area;
}

function main() {
  let raio, area;

  raio = parseFloat(ler("raio"));

  area = areaCirculo(raio);

  exibir(area);
}
