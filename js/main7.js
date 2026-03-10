function ler(id) {
  let valor;
  valor = document.getElementById(id).value;
  return valor;
}

function exibir(saida) {
  alert(saida);
}

function calcularAreaRetangulo(largura, comprimento) {
  let area;

  area = largura * comprimento;

  return area;
}

function main() {
  let comprimento, largura, area;

  comprimento = parseFloat(ler("comprimento"));
  largura = parseFloat(ler("largura"));

  area = calcularAreaRetangulo(largura, comprimento);

  exibir(area);
}
