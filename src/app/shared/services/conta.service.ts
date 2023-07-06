import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conta } from '../model/conta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContaService {
  URL_CONTAS = 'http://localhost:8080/contas';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.URL_CONTAS);
  }

  inserir(conta: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(this.URL_CONTAS, conta);
  }

  pesquisarPorId(id: number): Observable<Conta>{
    return this.httpClient.get<Conta>(`${this.URL_CONTAS}/${id}`);
  }

  alterar(conta: Conta): Observable<Conta> {
    return this.httpClient.put<Conta>(`${this.URL_CONTAS}/${conta.id}`, conta);
  }

  apagar(id: number): Observable<Conta> {
    return this.httpClient.delete<Conta>(`${this.URL_CONTAS}/${id}`);
  }

  depositar(conta: Conta, quantia: number): Observable<Conta> {
    const deposito = { conta, quantia }
    return this.httpClient.put<Conta>(`${this.URL_CONTAS}/depositar`, deposito);
  }

  findByCpf(cpf: string): Observable<Conta> {
    return this.httpClient.get<Conta>(`${this.URL_CONTAS}/cpf/${cpf}`);
  }

  transferir(contaOrigem: Conta, contaDestino: Conta, quantia: number): Observable<Conta[]> {
    const transferencia = { contaOrigem, contaDestino, quantia };
    return this.httpClient.put<Conta[]>(`${this.URL_CONTAS}/transferir`, transferencia);
  }

}
