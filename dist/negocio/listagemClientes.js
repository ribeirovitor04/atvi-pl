"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Nome social: ${cliente.nomeSocial}`);
            console.log(`CPF: ${cliente.getCpf.getValor}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    // Clientes que mais consumiram (por valor total)
    clientesPorConsumoDesc() {
        const clientesOrdenados = [...this.clientes].sort((a, b) => b.totalValorConsumido() - a.totalValorConsumido());
        console.log("\nClientes por consumo total (maior para menor):");
        clientesOrdenados.forEach((c, i) => {
            console.log(`${i + 1} - ${c.nome} (CPF: ${c.getCpf.getValor}) - Total gasto: R$ ${c
                .totalValorConsumido()
                .toFixed(2)}`);
        });
    }
    // Listar clientes com seus pets
    listarClientesComPets() {
        console.log("\nClientes e seus pets:");
        this.clientes.forEach((cliente) => {
            console.log(`Cliente: ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`);
            if (cliente.getPets.length === 0) {
                console.log("  Sem pets cadastrados.");
            }
            else {
                cliente.getPets.forEach((pet, i) => {
                    console.log(`  ${i + 1} - Nome: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}`);
                });
            }
        });
    }
}
exports.default = ListagemClientes;
