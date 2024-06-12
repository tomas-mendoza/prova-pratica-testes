//Prova Prátca - Parte 2

//Questão 6
function soma(a, b) {
  return a + b;
}

//Questão 7
function ePar(numero) {
  return numero % 2 === 0;
}

//Questão 8
function inverteString(str) {
  if (typeof str !== "string") {
    throw new Error("O argumento deve ser uma string");
  }

  if (str.length === 0) {
    throw new Error("A string deve ter pelo menos um caractere");
  }

  return str.split("").reverse().join("");
}

//Questão 9
function eAnoBissexto(ano) {
  if (typeof ano !== "number") {
    throw new Error("O argumento deve ser um número");
  }

  if (ano <= 0) {
    return false;
  }

  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

//Questão 10
function contaVogais(str) {
  if (typeof str !== "string") {
    throw new Error("O argumento deve ser uma string");
  }

  const vogais = str.match(/[aeiouAEIOU]/g);
  return vogais ? vogais.length : 0;
}

module.exports = {
  soma,
  ePar,
  inverteString,
  eAnoBissexto,
  contaVogais,
};
