"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
const listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
const cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
const listagemProduto_1 = __importDefault(require("../negocio/listagemProduto"));
const cadastroServico_1 = __importDefault(require("../negocio/cadastroServico"));
const listagemServico_1 = __importDefault(require("../negocio/listagemServico"));
console.log("Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias");
const empresa = new empresa_1.default();
const entrada = new entrada_1.default();
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
                    new cadastroCliente_1.default(empresa.getClientes).cadastrar();
                    break;
                case 2:
                    new listagemClientes_1.default(empresa.getClientes).listar();
                    break;
                case 3:
                    // Implementar atualização de cliente
                    console.log("Funcionalidade de atualizar cliente ainda não implementada.");
                    break;
                case 4:
                    // Implementar remoção de cliente
                    console.log("Funcionalidade de remover cliente ainda não implementada.");
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
                    new cadastroProduto_1.default(empresa.getProdutos).cadastrar();
                    break;
                case 2:
                    new listagemProduto_1.default(empresa.getProdutos, []).listar();
                    break;
                case 3:
                    console.log("Funcionalidade de atualizar produto ainda não implementada.");
                    break;
                case 4:
                    console.log("Funcionalidade de remover produto ainda não implementada.");
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
                    new cadastroServico_1.default(empresa.getServicos).cadastrar();
                    break;
                case 2:
                    new listagemServico_1.default(empresa.getServicos).listar();
                    break;
                case 3:
                    console.log("Funcionalidade de atualizar serviço ainda não implementada.");
                    break;
                case 4:
                    console.log("Funcionalidade de remover serviço ainda não implementada.");
                    break;
                default:
                    console.log("Opção inválida.");
            }
            break;
        case 4:
            // Registrar consumo
            console.log("Funcionalidade de registrar consumo ainda não implementada.");
            break;
        case 5:
            // Listagens gerais, por exemplo:
            console.log("Funcionalidades de listagens avançadas ainda não implementadas.");
            break;
        case 0:
            execucao = false;
            console.log("Saindo... Até mais!");
            break;
        default:
            console.log("Opção inválida, tente novamente.");
    }
}
