import promptSync from "prompt-sync";

export default class Entrada {
  private prompt = promptSync();

  receberNumero(mensagem: string): number {
    const valor = this.prompt(mensagem);
    const numero = Number(valor);
    if (isNaN(numero)) {
      console.log("Valor inválido, por favor digite um número.");
      return this.receberNumero(mensagem);
    }
    return numero;
  }

  receberTexto(mensagem: string): string {
    return this.prompt(mensagem);
  }
}
