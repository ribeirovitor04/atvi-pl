import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
  private produtos: Array<Produto>;
  private clientes: Array<Cliente>;

  constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
    super();
    this.produtos = produtos;
    this.clientes = clientes;
  }

  public listar(): void {
    console.log("\nLista de Produtos:");
    this.produtos.forEach((produto, index) => {
      console.log(`${index + 1} - Nome: ${produto.nome}`);
    });
    console.log("\n");
  }

  // Produtos mais consumidos (quantidade total)
  public produtosMaisConsumidos(): void {
    const consumoMap = new Map<string, number>();

    this.clientes.forEach((cliente) => {
      cliente.getConsumosProdutos.forEach((consumo) => {
        const nome = consumo.produto.nome;
        consumoMap.set(nome, (consumoMap.get(nome) ?? 0) + consumo.quantidade);
      });
    });

    const produtosOrdenados = Array.from(consumoMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );

    console.log("\nProdutos mais consumidos (quantidade):");
    produtosOrdenados.forEach(([nome, quantidade], i) => {
      console.log(`${i + 1} - ${nome} - Quantidade consumida: ${quantidade}`);
    });
  }
}
