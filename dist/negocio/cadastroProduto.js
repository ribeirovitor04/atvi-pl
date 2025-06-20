"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const produto_1 = __importDefault(require("../modelo/produto"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroProduto extends cadastro_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log("\nCadastro de Produto");
        const nome = this.entrada.receberTexto("Informe o nome do produto: ");
        const produto = new produto_1.default(nome);
        this.produtos.push(produto);
        console.log("\nProduto cadastrado com sucesso!\n");
    }
    atualizar() {
        console.log("\nAtualização de Produto");
        const nomeAntigo = this.entrada.receberTexto("Informe o nome do produto que deseja atualizar: ");
        const produto = this.produtos.find((p) => p.nome === nomeAntigo);
        if (!produto) {
            console.log("Produto não encontrado.");
            return;
        }
        const novoNome = this.entrada.receberTexto("Informe o novo nome do produto: ");
        produto.nome = novoNome;
        console.log("Produto atualizado com sucesso!");
    }
    deletar() {
        console.log("\nRemoção de Produto");
        const nome = this.entrada.receberTexto("Informe o nome do produto que deseja deletar: ");
        const index = this.produtos.findIndex((p) => p.nome === nome);
        if (index >= 0) {
            this.produtos.splice(index, 1);
            console.log("Produto removido com sucesso.");
        }
        else {
            console.log("Produto não encontrado.");
        }
    }
}
exports.default = CadastroProduto;
