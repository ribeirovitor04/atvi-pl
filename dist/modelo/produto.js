"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome) {
        this.nome = nome;
    }
    get getNome() {
        return this.nome;
    }
}
exports.default = Produto;
