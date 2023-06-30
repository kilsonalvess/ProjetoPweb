import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit{
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute){
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if(idUsuario) {
      this.usuarioService.
      pesquisarPorId(parseInt(idUsuario)).
      subscribe(
        usuario => this.usuario = usuario
      )
    }
  }

  depositar() {

  }
}
