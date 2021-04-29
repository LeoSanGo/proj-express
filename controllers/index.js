const home = (req, res) => {
  res.send('fullStack Master home');
};

const pagina1 = (req, res) => {
  res.send('fullStack Master pagina 1');
};

const calc = (req, res) => {
  res.send('calculadora');
};

module.exports = {
  home,
  pagina1,
  calc
};
