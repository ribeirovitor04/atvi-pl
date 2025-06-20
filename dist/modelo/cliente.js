"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.consumosProdutos = [];
        this.consumosServicos = [];
        this.pets = [];
    }
    // GETTERS
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getConsumosProdutos() {
        return this.consumosProdutos;
    }
    get getConsumosServicos() {
        return this.consumosServicos;
    }
    get getPets() {
        return this.pets;
    }
    // --------------------
    // CRUD PARA PETS
    // --------------------
    addPet(pet) {
        this.pets.push(pet);
    }
    removePet(nomePet) {
        const index = this.pets.findIndex((p) => p.getNome === nomePet);
        if (index >= 0) {
            this.pets.splice(index, 1);
            return true;
        }
        return false;
    }
    updatePet(nomePet, petAtualizado) {
        const index = this.pets.findIndex((p) => p.getNome === nomePet);
        if (index >= 0) {
            this.pets[index] = petAtualizado;
            return true;
        }
        return false;
    }
    // --------------------
    // REGISTRO DE CONSUMO
    // --------------------
    registrarConsumoProduto(produto, quantidade, valorUnitario) {
        this.consumosProdutos.push({
            produto,
            quantidade,
            data: new Date(),
            valorUnitario,
        });
    }
    registrarConsumoServico(servico, quantidade, valorUnitario) {
        this.consumosServicos.push({
            servico,
            quantidade,
            data: new Date(),
            valorUnitario,
        });
    }
    // --------------------
    // MÉTODOS DE ANÁLISE PARA LISTAGENS
    // --------------------
    // Total de produtos consumidos (quantidade)
    totalProdutosConsumidos() {
        return this.consumosProdutos.reduce((acc, item) => acc + item.quantidade, 0);
    }
    // Total de serviços consumidos (quantidade)
    totalServicosConsumidos() {
        return this.consumosServicos.reduce((acc, item) => acc + item.quantidade, 0);
    }
    // Total geral consumido em quantidade (produtos + serviços)
    totalQuantidadeConsumida() {
        return this.totalProdutosConsumidos() + this.totalServicosConsumidos();
    }
    // Total gasto em produtos (valor)
    totalValorProdutos() {
        return this.consumosProdutos.reduce((acc, item) => acc + item.quantidade * item.valorUnitario, 0);
    }
    // Total gasto em serviços (valor)
    totalValorServicos() {
        return this.consumosServicos.reduce((acc, item) => acc + item.quantidade * item.valorUnitario, 0);
    }
    // Total geral gasto em valor (produtos + serviços)
    totalValorConsumido() {
        return this.totalValorProdutos() + this.totalValorServicos();
    }
    // Listagem dos tipos e raças dos pets (para análises)
    getTiposERacasPets() {
        return this.pets.map((p) => ({
            tipo: p.getTipo,
            raca: p.getRaca,
        }));
    }
}
exports.default = Cliente;
