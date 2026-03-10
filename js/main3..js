function ler(id) {
  let valor;
  valor = document.getElementById(id).value;

  return valor;
}

function calcularBonus(salario) {
  let bonus;
  if (salario > 5000) bonus = (salario * 5) / 100;
  else bonus = (salario * 15) / 100;

  return bonus;
}

function exibir(saida) {
  alert(saida);
}

function main() {
  let salario, bonus;

  salario = parseFloat(ler("salario"));

  bonus = calcularBonus(salario);

  exibir(bonus);
}
