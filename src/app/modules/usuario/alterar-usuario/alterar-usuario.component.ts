import { ContaService } from 'src/app/shared/services/conta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { Conta } from 'src/app/shared/model/conta';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent {
  usuario: Usuario
  conta: Conta

  constructor(private usuarioService: UsuarioService, private contaService: ContaService, private rotaAtual: ActivatedRoute, private router: Router) {
    this.usuario = new Usuario();
    this.conta = new Conta();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => {
          this.usuario = usuario
          this.contaService.pesquisarPorCPF(this.usuario.cpf).subscribe((conta: Conta[])=> this.conta = conta[0])
        }
      )
    }
  }

  alterarUsuario(){
    this.usuarioService.alterar(this.usuario).subscribe(
      usuarioAlterado => this.usuario = usuarioAlterado
    )
    if (this.conta.cpf != this.usuario.cpf) {
      this.conta.cpf = this.usuario.cpf
      this.contaService.alterar(this.conta).subscribe()
    }
    this.router.navigate(['ver-perfil'], { relativeTo: this.rotaAtual.parent });
  }
}
