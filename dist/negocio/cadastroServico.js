"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const servico_1 = __importDefault(require("../modelo/servico"));
const cadastro_1 = __importDefault(require("./cadastro"));
class CadastroServico extends cadastro_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log("\nCadastro de Serviço");
        const nome = this.entrada.receberTexto("Informe o nome do serviço: ");
        const servico = new servico_1.default(nome);
        this.servicos.push(servico);
        console.log("\nServiço cadastrado com sucesso!\n");
    }
    atualizar() {
        console.log("\nAtualização de Serviço");
        const nomeAtual = this.entrada.receberTexto("Informe o nome do serviço que deseja atualizar: ");
        const servico = this.servicos.find((s) => s.nome === nomeAtual);
        if (!servico) {
            console.log("Serviço não encontrado.");
            return;
        }
        const novoNome = this.entrada.receberTexto("Informe o novo nome do serviço: ");
        servico.nome = novoNome;
        console.log("Serviço atualizado com sucesso!");
    }
    deletar() {
        console.log("\nRemoção de Serviço");
        const nome = this.entrada.receberTexto("Informe o nome do serviço que deseja deletar: ");
        const index = this.servicos.findIndex((s) => s.nome === nome);
        if (index >= 0) {
            this.servicos.splice(index, 1);
            console.log("Serviço removido com sucesso.");
        }
        else {
            console.log("Serviço não encontrado.");
        }
    }
}
exports.default = CadastroServico;
