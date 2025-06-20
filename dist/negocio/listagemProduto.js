"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemProdutos extends listagem_1.default {
    constructor(produtos, clientes) {
        super();
        this.produtos = produtos;
        this.clientes = clientes;
    }
    listar() {
        console.log("\nLista de Produtos:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1} - Nome: ${produto.nome}`);
        });
        console.log("\n");
    }
    // Produtos mais consumidos (quantidade total)
    produtosMaisConsumidos() {
        const consumoMap = new Map();
        this.clientes.forEach((cliente) => {
            cliente.getConsumosProdutos.forEach((consumo) => {
                var _a;
                const nome = consumo.produto.nome;
                consumoMap.set(nome, ((_a = consumoMap.get(nome)) !== null && _a !== void 0 ? _a : 0) + consumo.quantidade);
            });
        });
        const produtosOrdenados = Array.from(consumoMap.entries()).sort((a, b) => b[1] - a[1]);
        console.log("\nProdutos mais consumidos (quantidade):");
        produtosOrdenados.forEach(([nome, quantidade], i) => {
            console.log(`${i + 1} - ${nome} - Quantidade consumida: ${quantidade}`);
        });
    }
}
exports.default = ListagemProdutos;
