const prompt = require("prompt-sync")();
const calculadora = require ("./testes.js");

function mostrarMenu() {
  console.log(
    "Bem vindo à calculadora do Reinald, escolha uma opção:\n1. Efetuar uma soma \n2. Efetuar uma subtração \n3. Efetuar uma multiplicação\n4. Efetuar uma divisão \n5. Efetuar um cálculo de porcentagem\n6. Sair"
  );
  let resultado = +prompt("Digite aqui a opção desejada: ");
  return resultado;
}

function isValidNumber(n) {
  return !isNaN(n) && typeof n === 'number';
}

function processarOperacao(opcao) {
  if (opcao === 1) {
    console.log("Bem vindo à soma!");
    let n1 = +prompt("Digite o primeiro número a ser somado: ");
    let n2 = +prompt("Digite o segundo número a ser somado: ");
    if (isValidNumber(n1) && isValidNumber(n2)) {
      let respSoma = calculadora.soma (n1,n2)
      console.log("Resultado:", respSoma);
    } else {
      console.log("Digite números válidos!");
    }
  } else if (opcao === 2) {
    console.log("Bem vindo à subtração!");
    let n3 = +prompt("Digite o primeiro número a ser subtraído: ");
    let n4 = +prompt("Digite o segundo número a ser subtraído: ");
    if (isValidNumber(n3) && isValidNumber(n4)) {
      let respSub = calculadora.diminuir(n3, n4);
      console.log("Resultado:", respSub);
    } else {
      console.log("Digite números válidos!");
    }
  } else if (opcao === 3) {
    console.log("Bem vindo à multiplicação!");
    let n5 = +prompt("Digite o primeiro número a ser multiplicado: ");
    let n6 = +prompt("Digite o segundo número a ser multiplicado: ");
    if (isValidNumber(n5) && isValidNumber(n6)) {
      let respMult = calculadora.multiplicacao(n5, n6);
      console.log("Resultado:", respMult);
    } else {
      console.log("Digite números válidos!");
    }
  } else if (opcao === 4) {
    console.log("Bem vindo à divisão!");
    let n7 = +prompt("Digite o primeiro número a ser dividido: ");
    let n8 = +prompt("Digite o segundo número a ser dividido: ");
    if (isValidNumber(n7) && isValidNumber(n8)) {
      let respDiv = calculadora.divisao(n7, n8);
      console.log("Resultado:", respDiv);
    } else {
      console.log("Digite números válidos!");
    }
  } else if (opcao === 5) {
    console.log("Bem vindo à porcentagem!");
    let n9 = +prompt("Digite quantos por cento quer saber: ");
    let n10 = +prompt("Digite de qual número quer saber: ");
    if (isValidNumber(n9) && isValidNumber(n10)) {
      let respPor = calculadora.porcentagem(n9, n10);
      console.log("Resultado:", respPor);
    } else {
      console.log("Digite números válidos!");
    }
  } else if (opcao === 6) {
    console.log("Saindo...");
    process.exit();
  } else {
    console.log("Digite uma opção válida!");
  }
}

while (true) {
  let resp = mostrarMenu();
  processarOperacao(resp);
}