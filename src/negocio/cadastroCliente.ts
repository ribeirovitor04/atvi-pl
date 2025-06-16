import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
  private clientes: Array<Cliente>;
  private entrada: Entrada;

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
    this.entrada = new Entrada();
  }

  // --- CRUD CLIENTE ---

  public cadastrar(): void {
    console.log(`\nInício do cadastro do cliente`);
    let nome = this.entrada.receberTexto(`Informe o nome do cliente: `);
    let nomeSocial = this.entrada.receberTexto(
      `Informe o nome social do cliente: `
    );
    let valorCpf = this.entrada.receberTexto(`Informe o número do CPF: `);
    let data = this.entrada.receberTexto(
      `Informe a data de emissão do CPF (dd/mm/yyyy): `
    );
    let partesData = data.split("/");
    let ano = Number(partesData[2]);
    let mes = Number(partesData[1]) - 1;
    let dia = Number(partesData[0]);
    let dataEmissao = new Date(ano, mes, dia);
    let cpf = new CPF(valorCpf, dataEmissao);
    let cliente = new Cliente(nome, nomeSocial, cpf);
    this.clientes.push(cliente);
    console.log(`\nCadastro do cliente concluído.\n`);
  }

  public listar(): void {
    console.log(`\nLista de clientes cadastrados:`);
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente cadastrado.");
      return;
    }
    this.clientes.forEach((c, i) => {
      console.log(`${i + 1} - ${c.nome} (CPF: ${c.getCpf.getValor})`);
    });
  }

  public buscarPorCpf(cpf: string): Cliente | undefined {
    return this.clientes.find((c) => c.getCpf.getValor === cpf);
  }

  public atualizar(): void {
    const cpf = this.entrada.receberTexto(
      "Informe o CPF do cliente para atualizar: "
    );
    const cliente = this.buscarPorCpf(cpf);
    if (!cliente) {
      console.log("Cliente não encontrado.");
      return;
    }
    const novoNome = this.entrada.receberTexto(
      "Informe o novo nome do cliente: "
    );
    const novoNomeSocial = this.entrada.receberTexto(
      "Informe o novo nome social do cliente: "
    );
    cliente.nome = novoNome;
    cliente.nomeSocial = novoNomeSocial;
    console.log("Cliente atualizado com sucesso.");
  }

  public deletar(): void {
    const cpf = this.entrada.receberTexto(
      "Informe o CPF do cliente para deletar: "
    );
    const index = this.clientes.findIndex((c) => c.getCpf.getValor === cpf);
    if (index >= 0) {
      this.clientes.splice(index, 1);
      console.log("Cliente deletado com sucesso.");
    } else {
      console.log("Cliente não encontrado.");
    }
  }

  // --- CRUD PETS ---

  public cadastrarPet(): void {
    const cpf = this.entrada.receberTexto(
      "Informe o CPF do cliente para cadastrar um pet: "
    );
    const cliente = this.buscarPorCpf(cpf);
    if (!cliente) {
      console.log("Cliente não encontrado.");
      return;
    }
    const nomePet = this.entrada.receberTexto("Informe o nome do pet: ");
    const raca = this.entrada.receberTexto("Informe a raça do pet: ");
    const genero = this.entrada.receberTexto("Informe o gênero do pet: ");
    const tipo = this.entrada.receberTexto(
      "Informe o tipo do pet (ex: cão, gato): "
    );
    const pet = new Pet(nomePet, raca, genero, tipo);
    cliente.getPets.push(pet);
    console.log("Pet cadastrado com sucesso para o cliente.");
  }

  public listarPets(): void {
    const cpf = this.entrada.receberTexto(
      "Informe o CPF do cliente para listar os pets: "
    );
    const cliente = this.buscarPorCpf(cpf);
    if (!cliente) {
      console.log("Cliente não encontrado.");
      return;
    }
    if (cliente.getPets.length === 0) {
      console.log("Este cliente não possui pets cadastrados.");
      return;
    }
    console.log(`Pets do cliente ${cliente.nome}:`);
    cliente.getPets.forEach((pet, i) => {
      console.log(
        `${i + 1} - Nome: ${pet.getNome}, Raça: ${pet.getRaca}, Gênero: ${
          pet.getGenero
        }, Tipo: ${pet.getTipo}`
      );
    });
  }

  public atualizarPet(): void {
    const cpf = this.entrada.receberTexto(
      "Informe o CPF do cliente para atualizar um pet: "
    );
    const cliente = this.buscarPorCpf(cpf);
    if (!cliente) {
      console.log("Cliente não encontrado.");
      return;
    }
    if (cliente.getPets.length === 0) {
      console.log("Este cliente não possui pets cadastrados.");
      return;
    }
    this.listarPetsPorCliente(cliente);
    const indicePet =
      this.entrada.receberNumero(
        "Informe o número do pet que deseja atualizar: "
      ) - 1;
    if (indicePet < 0 || indicePet >= cliente.getPets.length) {
      console.log("Número de pet inválido.");
      return;
    }
    const pet = cliente.getPets[indicePet];
    const novoNome = this.entrada.receberTexto("Informe o novo nome do pet: ");
    const novaRaca = this.entrada.receberTexto("Informe a nova raça do pet: ");
    const novoGenero = this.entrada.receberTexto(
      "Informe o novo gênero do pet: "
    );
    const novoTipo = this.entrada.receberTexto("Informe o novo tipo do pet: ");
    pet.setNome = novoNome;
    pet.setRaca = novaRaca;
    pet.setGenero = novoGenero;
    pet.setTipo = novoTipo;
    console.log("Pet atualizado com sucesso.");
  }

  public deletarPet(): void {
    const cpf = this.entrada.receberTexto(
      "Informe o CPF do cliente para deletar um pet: "
    );
    const cliente = this.buscarPorCpf(cpf);
    if (!cliente) {
      console.log("Cliente não encontrado.");
      return;
    }
    if (cliente.getPets.length === 0) {
      console.log("Este cliente não possui pets cadastrados.");
      return;
    }
    this.listarPetsPorCliente(cliente);
    const indicePet =
      this.entrada.receberNumero(
        "Informe o número do pet que deseja deletar: "
      ) - 1;
    if (indicePet < 0 || indicePet >= cliente.getPets.length) {
      console.log("Número de pet inválido.");
      return;
    }
    cliente.getPets.splice(indicePet, 1);
    console.log("Pet deletado com sucesso.");
  }

  private listarPetsPorCliente(cliente: Cliente): void {
    console.log(`Pets do cliente ${cliente.nome}:`);
    cliente.getPets.forEach((pet, i) => {
      console.log(
        `${i + 1} - Nome: ${pet.getNome}, Raça: ${pet.getRaca}, Gênero: ${
          pet.getGenero
        }, Tipo: ${pet.getTipo}`
      );
    });
  }
}
