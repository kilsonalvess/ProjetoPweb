import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})

export class CriarUsuarioComponent implements OnInit{
  usuario: Usuario;
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioFirestoreService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  criarUsuario(usuario: Usuario) {
    this.usuarioService.inserir(usuario).subscribe(
      novoUsuario => console.log(usuario)
    )
  }
}
