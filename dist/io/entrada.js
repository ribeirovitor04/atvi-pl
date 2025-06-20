"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Entrada {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    receberNumero(mensagem) {
        const valor = this.prompt(mensagem);
        const numero = Number(valor);
        if (isNaN(numero)) {
            console.log("Valor inválido, por favor digite um número.");
            return this.receberNumero(mensagem);
        }
        return numero;
    }
    receberTexto(mensagem) {
        return this.prompt(mensagem);
    }
}
exports.default = Entrada;
