import { ContaService } from './../../../shared/services/conta.service';
import { UsuarioService } from './../../../shared/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conta } from 'src/app/shared/model/conta';
import { Usuario } from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit{
  usuario: Usuario;
  conta: Conta;
  usuarios: Usuario[] = [];
  inputQuantia: string= '0';

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private contaService: ContaService){
    this.usuario = new Usuario();
    this.conta = new Conta();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if(idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => this.usuario = usuario
      )
      this.contaService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        conta => this.conta = conta
      )
    }
  }

  depositar() {
    this.contaService.alterar(this.conta).subscribe(
      contaAlterada => this.conta.saldo = this.conta.saldo + parseFloat(this.inputQuantia)
    )
  }
}
