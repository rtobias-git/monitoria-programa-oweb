function ler(id) {
  let valor;
  valor = document.getElementById(id).value;
  return valor;
}

function calcularMedia(nota1, nota2) {
  let media;

  media = (nota1 + nota2) / 2;

  return media;
}

function exibir(saida) {
  alert(saida);
}

function main() {
  let nota1, nota2, media;

  nota1 = parseFloat(ler("nota1"));

  nota2 = parseFloat(ler("nota2"));

  media = calcularMedia(nota1, nota2);

  exibir(media);
}
