import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";

type ConsumoProduto = {
  produto: Produto;
  quantidade: number;
  data: Date;
  valorUnitario: number;
};

type ConsumoServico = {
  servico: Servico;
  quantidade: number;
  data: Date;
  valorUnitario: number;
};

export default class Cliente {
  public nome: string;
  public nomeSocial: string;
  private cpf: CPF;
  private rgs: Array<RG>;
  private dataCadastro: Date;
  private telefones: Array<Telefone>;
  private consumosProdutos: Array<ConsumoProduto>;
  private consumosServicos: Array<ConsumoServico>;
  private pets: Array<Pet>;

  constructor(nome: string, nomeSocial: string, cpf: CPF) {
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
  public get getCpf(): CPF {
    return this.cpf;
  }
  public get getRgs(): Array<RG> {
    return this.rgs;
  }
  public get getDataCadastro(): Date {
    return this.dataCadastro;
  }
  public get getTelefones(): Array<Telefone> {
    return this.telefones;
  }
  public get getConsumosProdutos(): Array<ConsumoProduto> {
    return this.consumosProdutos;
  }
  public get getConsumosServicos(): Array<ConsumoServico> {
    return this.consumosServicos;
  }
  public get getPets(): Array<Pet> {
    return this.pets;
  }

  // --------------------
  // CRUD PARA PETS
  // --------------------
  public addPet(pet: Pet): void {
    this.pets.push(pet);
  }

  public removePet(nomePet: string): boolean {
    const index = this.pets.findIndex((p) => p.getNome === nomePet);
    if (index >= 0) {
      this.pets.splice(index, 1);
      return true;
    }
    return false;
  }

  public updatePet(nomePet: string, petAtualizado: Pet): boolean {
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
  public registrarConsumoProduto(
    produto: Produto,
    quantidade: number,
    valorUnitario: number
  ): void {
    this.consumosProdutos.push({
      produto,
      quantidade,
      data: new Date(),
      valorUnitario,
    });
  }

  public registrarConsumoServico(
    servico: Servico,
    quantidade: number,
    valorUnitario: number
  ): void {
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
  public totalProdutosConsumidos(): number {
    return this.consumosProdutos.reduce(
      (acc, item) => acc + item.quantidade,
      0
    );
  }

  // Total de serviços consumidos (quantidade)
  public totalServicosConsumidos(): number {
    return this.consumosServicos.reduce(
      (acc, item) => acc + item.quantidade,
      0
    );
  }

  // Total geral consumido em quantidade (produtos + serviços)
  public totalQuantidadeConsumida(): number {
    return this.totalProdutosConsumidos() + this.totalServicosConsumidos();
  }

  // Total gasto em produtos (valor)
  public totalValorProdutos(): number {
    return this.consumosProdutos.reduce(
      (acc, item) => acc + item.quantidade * item.valorUnitario,
      0
    );
  }

  // Total gasto em serviços (valor)
  public totalValorServicos(): number {
    return this.consumosServicos.reduce(
      (acc, item) => acc + item.quantidade * item.valorUnitario,
      0
    );
  }

  // Total geral gasto em valor (produtos + serviços)
  public totalValorConsumido(): number {
    return this.totalValorProdutos() + this.totalValorServicos();
  }

  // Listagem dos tipos e raças dos pets (para análises)
  public getTiposERacasPets(): { tipo: string; raca: string }[] {
    return this.pets.map((p) => ({
      tipo: p.getTipo,
      raca: p.getRaca,
    }));
  }
}
