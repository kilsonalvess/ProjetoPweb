import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent {
  usuario: Usuario

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => this.usuario = usuario
      )
    }
  }

  alterarUsuario(){
    this.usuarioService.alterar(this.usuario).subscribe(
      UsuarioAlterado => this.usuario = UsuarioAlterado
    )
    this.router.navigate(['ver-perfil'], { relativeTo: this.rotaAtual.parent });
  }
}
