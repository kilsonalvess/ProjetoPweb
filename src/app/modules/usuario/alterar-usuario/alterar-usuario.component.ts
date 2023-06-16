import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent {
  usuario: Usuario

  constructor(private usuarioService: UsuarioFirestoreService, private rotaAtual: ActivatedRoute, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(idUsuario).subscribe(
        usuario => this.usuario = usuario
      )
    }
  }

  alterarUsuario(){
    this.usuarioService.atualizar(this.usuario)
    this.router.navigate(['ver-perfil'], { relativeTo: this.rotaAtual.parent });
  }
}
