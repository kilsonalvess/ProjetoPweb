import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  URL_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL_USUARIOS);
  }

  adicionar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  pesquisarPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

  alterar(usuario: Usuario): void {
    const ObjObservable = this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
    ObjObservable.subscribe(
      UsuarioAlterado => UsuarioAlterado = usuario
    )
  }

  remover(id: number): Observable<Usuario> {
    return this.httpClient.delete<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }

}
