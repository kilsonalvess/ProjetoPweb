import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { Router } from '@angular/router';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-tela-de-login',
  templateUrl: './tela-de-login.component.html',
  styleUrls: ['./tela-de-login.component.css']
})

export class TelaDeLoginComponent implements OnInit{
  usuario: Usuario;
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioFirestoreService, private router: Router){
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  login(): void {
    if(this.autenticarUsuario()) {
      this.router.navigate(['/menu', this.usuario.id])
    } else {
      window.alert('Credenciais incorretas');
    }
  }

  autenticarUsuario(): boolean {
    for(let usuario of this.usuarios) {
      if(this.usuario.username === usuario.username && this.usuario.password === usuario.password) {
        this.usuario = usuario;
        return true;
      }
    }
    return false;
  }
}
