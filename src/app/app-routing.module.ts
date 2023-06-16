import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { TelaDeLoginComponent } from './modules/login/tela-de-login/tela-de-login.component';
import { AlterarUsuarioComponent } from './modules/usuario/alterar-usuario/alterar-usuario.component';
import { CriarUsuarioComponent } from './modules/usuario/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './modules/usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: 'login',
    component: TelaDeLoginComponent
  },
  {
    path: 'criar-usuario',
    component: CriarUsuarioComponent
  },
  {
    path: 'menu/:id',
    component: MenuComponent,
    children: [
      {
        path: 'ver-perfil',
        component: ListarUsuarioComponent
      },
      {
        path: 'alterar-usuario',
        component: AlterarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
