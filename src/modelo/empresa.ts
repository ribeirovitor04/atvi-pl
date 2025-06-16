import Cliente from "./cliente";
import Produto from "./produto";
import Servico from "./servico";

export default class Empresa {
  private clientes: Array<Cliente>;
  private produtos: Array<Produto>;
  private servicos: Array<Servico>;

  constructor() {
    this.clientes = [];
    this.produtos = [];
    this.servicos = [];
  }

  // GETTERS
  public get getClientes(): Array<Cliente> {
    return this.clientes;
  }

  public get getProdutos(): Array<Produto> {
    return this.produtos;
  }

  public get getServicos(): Array<Servico> {
    return this.servicos;
  }

  // CRUD Clientes
  public adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  public buscarClientePorCpf(cpf: string): Cliente | undefined {
    return this.clientes.find((c) => c.getCpf.getValor === cpf);
  }

  public atualizarCliente(cpf: string, clienteAtualizado: Cliente): boolean {
    const index = this.clientes.findIndex((c) => c.getCpf.getValor === cpf);
    if (index >= 0) {
      this.clientes[index] = clienteAtualizado;
      return true;
    }
    return false;
  }

  public removerCliente(cpf: string): boolean {
    const index = this.clientes.findIndex((c) => c.getCpf.getValor === cpf);
    if (index >= 0) {
      this.clientes.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Produtos (ajustado para produtos com só nome)
  public adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  public buscarProdutoPorNome(nome: string): Produto | undefined {
    return this.produtos.find((p) => p.nome === nome);
  }

  public atualizarProduto(
    nomeAtual: string,
    produtoAtualizado: Produto
  ): boolean {
    const index = this.produtos.findIndex((p) => p.nome === nomeAtual);
    if (index >= 0) {
      this.produtos[index] = produtoAtualizado;
      return true;
    }
    return false;
  }

  public removerProduto(nome: string): boolean {
    const index = this.produtos.findIndex((p) => p.nome === nome);
    if (index >= 0) {
      this.produtos.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Serviços (já ajustado corretamente)
  public adicionarServico(servico: Servico): void {
    this.servicos.push(servico);
  }

  public buscarServicoPorNome(nome: string): Servico | undefined {
    return this.servicos.find((s) => s.nome === nome);
  }

  public atualizarServico(
    nomeAtual: string,
    servicoAtualizado: Servico
  ): boolean {
    const index = this.servicos.findIndex((s) => s.nome === nomeAtual);
    if (index >= 0) {
      this.servicos[index] = servicoAtualizado;
      return true;
    }
    return false;
  }

  public removerServico(nome: string): boolean {
    const index = this.servicos.findIndex((s) => s.nome === nome);
    if (index >= 0) {
      this.servicos.splice(index, 1);
      return true;
    }
    return false;
  }
}
