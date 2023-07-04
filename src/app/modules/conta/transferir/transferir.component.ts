import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conta } from 'src/app/shared/model/conta';
import { Usuario } from 'src/app/shared/model/usuario';
import { ContaService } from 'src/app/shared/services/conta.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit{
  usuarioDestinatario: Usuario;
  usuarioRemetente: Usuario;
  conta: Conta;
  inputQuantia: string= '0';

  constructor(private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private contaService: ContaService){
    this.usuarioDestinatario = new Usuario();
    this.usuarioRemetente = new Usuario();
    this.conta = new Conta();
  }

  ngOnInit(): void {
    const idUsuario = this.rotaAtual.parent?.snapshot.paramMap.get('id');
    if (idUsuario) {
      this.usuarioService.pesquisarPorId(parseInt(idUsuario)).subscribe(
        usuario => {
          this.usuarioDestinatario = usuario
          //this.contaService.pesquisarPorCPF(this.usuario).subscribe(conta=> this.conta = conta)
        }
      )
    }
  }

  depositar() {
    this.conta.saldo += parseFloat(this.inputQuantia)
    this.contaService.alterar(this.conta).subscribe()
  }

  transferir() {

  }
}
