const readline = require("readline-sync");

const produtos = [];

function criar() {
  const nome = readline.question("Informe o nome do produto: ");
  const preco = readline.question("Informe o preco do produto: ");
  const novo = { nome, preco }; // new Object(nome, preco)
  produtos.push(novo);
}

function listar() {
  produtos.forEach((produto) => console.log(produto.nome, "-", produto.preco));
}

function buscar() {
  const nome = readline.question("Informe o nome do produto: ");
  const buscou = produtos.find((produto) => produto.nome === nome);
  if (buscou) {
    console.log(buscou.nome, "-", buscou.preco);
  } else {
    console.log("Produto não encontrado");
  }
}

function atualizar() {
  const nome = readline.question("Informe o nome do produto: ");
  const buscou = produtos.find((produto) => produto.nome === nome);
  if (buscou) {
    const outroNome = 
      readline.question("Informe outro nome para o produto: ");
    const outroPreco = 
      readline.question("Informe outro preco para o produto: ");
    buscou.nome = outroNome;
    buscou.preco = outroPreco;
  } else {
    console.log("Produto não encontrado");
  }
}

 function remover(){
    const nome = readline.question("Informe o nome do produto: ");
    const posicao = produtos.findIndex((produto) => produto.nome === nome);
    if (posicao >=0){
        produtos.slice(posicao, 1);
    } else{
        console.log ("Produto não encontrado");
    }
 }

function menu() {
  console.log("1. Listar");
  console.log("2. Criar");
  console.log("3. Buscar");
  console.log("4. Atualizar");
  console.log("5. Remover");
  console.log("6. Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      listar();
      break;
    case "2":
      criar();
      break;
    case "3":
      buscar();
      break;
    case "4":
        atualizar();
      break;
    case "5":
        remover();
      break;
    case "6":
      process.exit(0);
    default:
      console.log("Opcao invalida");
  }
  readline.question("Pressione ENTER para continuar...");
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opcao: ");
    escolherOpcao(opcao);
  }
}

main();
