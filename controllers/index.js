const home = (req, res) => {
  res.send('fullStack Master home');
};

const pagina1 = (req, res) => {
  res.send('fullStack Master pagina 1');
};

const calc = (req, res) => {
  if (req.query.num1 && req.query.num2) {
    const { num1, num2 } = req.query;
    const soma = parseFloat(num1) + parseFloat(num2);
    res.send('A soma é: ' + soma);
  } else {
    res.send('calculadora');
  }
};

const par = (req, res) => {
  const isPar = req.params.num % 2 === 0;
  if (isPar) {
    res.send('Numero É par');
  } else {
    res.send('Numero É impar');
  }
};

module.exports = {
  home,
  pagina1,
  calc,
  par,
};
