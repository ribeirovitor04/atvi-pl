import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemServicos from "../negocio/listagemServico";

console.log(
  "Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias"
);

const empresa = new Empresa();
const entrada = new Entrada();

let execucao = true;

while (execucao) {
  console.log("\nMenu Principal:");
  console.log("1 - Gerenciar Clientes");
  console.log("2 - Gerenciar Produtos");
  console.log("3 - Gerenciar Serviços");
  console.log("4 - Registrar consumo de produto/serviço para cliente");
  console.log("5 - Listagens");
  console.log("0 - Sair");

  const opcao = entrada.receberNumero("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      // Gerenciar Clientes
      console.log("\nMenu Clientes:");
      console.log("1 - Cadastrar cliente");
      console.log("2 - Listar clientes");
      console.log("3 - Atualizar cliente");
      console.log("4 - Remover cliente");
      // Você pode adicionar opções para CRUD de pets aqui também
      const opcaoClientes = entrada.receberNumero("Escolha uma opção: ");
      switch (opcaoClientes) {
        case 1:
          new CadastroCliente(empresa.getClientes).cadastrar();
          break;
        case 2:
          new ListagemClientes(empresa.getClientes).listar();
          break;
        case 3:
          // Implementar atualização de cliente
          console.log(
            "Funcionalidade de atualizar cliente ainda não implementada."
          );
          break;
        case 4:
          // Implementar remoção de cliente
          console.log(
            "Funcionalidade de remover cliente ainda não implementada."
          );
          break;
        default:
          console.log("Opção inválida.");
      }
      break;

    case 2:
      // Gerenciar Produtos
      console.log("\nMenu Produtos:");
      console.log("1 - Cadastrar produto");
      console.log("2 - Listar produtos");
      console.log("3 - Atualizar produto");
      console.log("4 - Remover produto");
      const opcaoProdutos = entrada.receberNumero("Escolha uma opção: ");
      switch (opcaoProdutos) {
        case 1:
          new CadastroProduto(empresa.getProdutos).cadastrar();
          break;
        case 2:
          new ListagemProdutos(empresa.getProdutos, []).listar();
          break;
        case 3:
          console.log(
            "Funcionalidade de atualizar produto ainda não implementada."
          );
          break;
        case 4:
          console.log(
            "Funcionalidade de remover produto ainda não implementada."
          );
          break;
        default:
          console.log("Opção inválida.");
      }
      break;

    case 3:
      // Gerenciar Serviços
      console.log("\nMenu Serviços:");
      console.log("1 - Cadastrar serviço");
      console.log("2 - Listar serviços");
      console.log("3 - Atualizar serviço");
      console.log("4 - Remover serviço");
      const opcaoServicos = entrada.receberNumero("Escolha uma opção: ");
      switch (opcaoServicos) {
        case 1:
          new CadastroServico(empresa.getServicos).cadastrar();
          break;
        case 2:
          new ListagemServicos(empresa.getServicos).listar();
          break;
        case 3:
          console.log(
            "Funcionalidade de atualizar serviço ainda não implementada."
          );
          break;
        case 4:
          console.log(
            "Funcionalidade de remover serviço ainda não implementada."
          );
          break;
        default:
          console.log("Opção inválida.");
      }
      break;

    case 4:
      // Registrar consumo
      console.log(
        "Funcionalidade de registrar consumo ainda não implementada."
      );
      break;

    case 5:
      // Listagens gerais, por exemplo:
      console.log(
        "Funcionalidades de listagens avançadas ainda não implementadas."
      );
      break;

    case 0:
      execucao = false;
      console.log("Saindo... Até mais!");
      break;

    default:
      console.log("Opção inválida, tente novamente.");
  }
}
