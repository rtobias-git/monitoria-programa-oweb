function ler(id) {
  let valor;
  valor = document.getElementById(id).value;
  return valor;
}

function exibir(saida) {
  alert(saida);
}

function totalDinheiros(valor) {
  let centavos = valor * 100;

  let n200 = 0,
    n100 = 0,
    n50 = 0,
    n20 = 0,
    n10 = 0,
    n5 = 0,
    n2 = 0,
    n1 = 0,
    m050 = 0,
    m025 = 0,
    m010 = 0,
    m005 = 0,
    m001 = 0;

  while (centavos >= 20000) {
    n200++;
    centavos -= 20000;
  }

  while (centavos >= 10000) {
    n100++;
    centavos -= 10000;
  }

  while (centavos >= 5000) {
    n50++;
    centavos -= 5000;
  }

  while (centavos >= 2000) {
    n20++;
    centavos -= 2000;
  }

  while (centavos >= 1000) {
    n10++;
    centavos -= 1000;
  }

  while (centavos >= 500) {
    n5++;
    centavos -= 500;
  }

  while (centavos >= 200) {
    n2++;
    centavos -= 200;
  }

  while (centavos >= 100) {
    n1++;
    centavos -= 100;
  }

  while (centavos >= 50) {
    m050++;
    centavos -= 50;
  }

  while (centavos >= 25) {
    m025++;
    centavos -= 25;
  }

  while (centavos >= 10) {
    m010++;
    centavos -= 10;
  }

  while (centavos >= 5) {
    m005++;
    centavos -= 5;
  }

  while (centavos >= 1) {
    m001++;
    centavos -= 1;
  }

  return (
    "200:" +
    n200 +
    " 100:" +
    n100 +
    " 50:" +
    n50 +
    " 20:" +
    n20 +
    " 10:" +
    n10 +
    " 5:" +
    n5 +
    " 2:" +
    n2 +
    " 1:" +
    n1 +
    " 0.50:" +
    m050 +
    " 0.25:" +
    m025 +
    " 0.10:" +
    m010 +
    " 0.05:" +
    m005 +
    " 0.01:" +
    m001
  );
}

function main() {
  let valor, total;

  valor = parseFloat(ler("valor"));

  total = totalDinheiros(valor);

  exibir(total);
}
