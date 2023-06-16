import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioFirestoreService } from 'src/app/shared/services/usuario-firestore.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[] = [];

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
    this.usuarioService.listar().subscribe(usuarios => this.usuarios = usuarios)
  }

  btnAlterar(){
    this.router.navigate(['alterar-usuario'], { relativeTo: this.rotaAtual.parent });
  }

  btnRemover(){
    if(this.usuario.id) {
      this.usuarioService.apagar(this.usuario.id).subscribe(
        usuarioRemovido => {
          const indx = this.usuarios.findIndex(usuario =>
            usuario.id === this.usuario.id);
          this.usuarios.splice(indx, 1);
        }
      )
    }
    this.router.navigate(['/login'])
  }
}
