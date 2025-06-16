import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Cadastro {
  private produtos: Array<Produto>;
  private entrada: Entrada;

  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log("\nCadastro de Produto");

    const nome = this.entrada.receberTexto("Informe o nome do produto: ");

    const produto = new Produto(nome);
    this.produtos.push(produto);

    console.log("\nProduto cadastrado com sucesso!\n");
  }

  public atualizar(): void {
    console.log("\nAtualização de Produto");

    const nomeAntigo = this.entrada.receberTexto(
      "Informe o nome do produto que deseja atualizar: "
    );
    const produto = this.produtos.find((p) => p.nome === nomeAntigo);
    if (!produto) {
      console.log("Produto não encontrado.");
      return;
    }

    const novoNome = this.entrada.receberTexto(
      "Informe o novo nome do produto: "
    );
    produto.nome = novoNome;

    console.log("Produto atualizado com sucesso!");
  }

  public deletar(): void {
    console.log("\nRemoção de Produto");

    const nome = this.entrada.receberTexto(
      "Informe o nome do produto que deseja deletar: "
    );
    const index = this.produtos.findIndex((p) => p.nome === nome);
    if (index >= 0) {
      this.produtos.splice(index, 1);
      console.log("Produto removido com sucesso.");
    } else {
      console.log("Produto não encontrado.");
    }
  }
}
