"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    // GETTERS
    get getClientes() {
        return this.clientes;
    }
    get getProdutos() {
        return this.produtos;
    }
    get getServicos() {
        return this.servicos;
    }
    // CRUD Clientes
    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }
    buscarClientePorCpf(cpf) {
        return this.clientes.find((c) => c.getCpf.getValor === cpf);
    }
    atualizarCliente(cpf, clienteAtualizado) {
        const index = this.clientes.findIndex((c) => c.getCpf.getValor === cpf);
        if (index >= 0) {
            this.clientes[index] = clienteAtualizado;
            return true;
        }
        return false;
    }
    removerCliente(cpf) {
        const index = this.clientes.findIndex((c) => c.getCpf.getValor === cpf);
        if (index >= 0) {
            this.clientes.splice(index, 1);
            return true;
        }
        return false;
    }
    // CRUD Produtos (ajustado para produtos com só nome)
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    buscarProdutoPorNome(nome) {
        return this.produtos.find((p) => p.nome === nome);
    }
    atualizarProduto(nomeAtual, produtoAtualizado) {
        const index = this.produtos.findIndex((p) => p.nome === nomeAtual);
        if (index >= 0) {
            this.produtos[index] = produtoAtualizado;
            return true;
        }
        return false;
    }
    removerProduto(nome) {
        const index = this.produtos.findIndex((p) => p.nome === nome);
        if (index >= 0) {
            this.produtos.splice(index, 1);
            return true;
        }
        return false;
    }
    // CRUD Serviços (já ajustado corretamente)
    adicionarServico(servico) {
        this.servicos.push(servico);
    }
    buscarServicoPorNome(nome) {
        return this.servicos.find((s) => s.nome === nome);
    }
    atualizarServico(nomeAtual, servicoAtualizado) {
        const index = this.servicos.findIndex((s) => s.nome === nomeAtual);
        if (index >= 0) {
            this.servicos[index] = servicoAtualizado;
            return true;
        }
        return false;
    }
    removerServico(nome) {
        const index = this.servicos.findIndex((s) => s.nome === nome);
        if (index >= 0) {
            this.servicos.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.default = Empresa;
