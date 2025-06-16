import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
  private servicos: Array<Servico>;
  private entrada: Entrada;

  constructor(servicos: Array<Servico>) {
    super();
    this.servicos = servicos;
    this.entrada = new Entrada();
  }

  public cadastrar(): void {
    console.log("\nCadastro de Serviço");

    const nome = this.entrada.receberTexto("Informe o nome do serviço: ");

    const servico = new Servico(nome);
    this.servicos.push(servico);

    console.log("\nServiço cadastrado com sucesso!\n");
  }

  public atualizar(): void {
    console.log("\nAtualização de Serviço");
    const nomeAtual = this.entrada.receberTexto(
      "Informe o nome do serviço que deseja atualizar: "
    );
    const servico = this.servicos.find((s) => s.nome === nomeAtual);

    if (!servico) {
      console.log("Serviço não encontrado.");
      return;
    }

    const novoNome = this.entrada.receberTexto(
      "Informe o novo nome do serviço: "
    );
    servico.nome = novoNome;

    console.log("Serviço atualizado com sucesso!");
  }

  public deletar(): void {
    console.log("\nRemoção de Serviço");
    const nome = this.entrada.receberTexto(
      "Informe o nome do serviço que deseja deletar: "
    );
    const index = this.servicos.findIndex((s) => s.nome === nome);

    if (index >= 0) {
      this.servicos.splice(index, 1);
      console.log("Serviço removido com sucesso.");
    } else {
      console.log("Serviço não encontrado.");
    }
  }
}
