import { Conta } from "./conta";

export class Usuario {
  public conta: Conta;

  constructor(
    public id?: string,
    public username:string = '',
    public password: string = '',
    public nome:string = '',
    public idade: number = 0,
    public cpf:string = '')
    {
      this.conta = new Conta();
    }
}
