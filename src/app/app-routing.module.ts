import { ListaNacionalidadeComponent } from './lista-nacionalidade/lista-nacionalidade.component';
import { ListaSexoComponent } from './lista-sexo/lista-sexo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';


const routes: Routes = [
  { path: 'nacionalidade/listar', component: ListaNacionalidadeComponent },
  { path: 'sexo/listar', component: ListaSexoComponent },
  { path: 'cadastro/listar', component: ListaUsuarioComponent },
  { path: 'cadastro/incluir', component: CriarUsuarioComponent },
  { path: 'cadastro/atualizar', component: AtualizarUsuarioComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
