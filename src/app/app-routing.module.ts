import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './componentes/cadastro/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './componentes/cadastro/listar-usuario/listar-usuario.component';
import { ExcluirUsuarioComponent } from './componentes/cadastro/excluir-usuario/excluir-usuario.component';
import { EditarUsuarioComponent } from './componentes/cadastro/editar-usuario/editar-usuario.component';
import { VisualizarUsuarioComponent } from './componentes/cadastro/visualizar-usuario/visualizar-usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarUsuario',
    pathMatch: 'full'
  },
  {
    path: 'cadastrarUsuario',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'listarUsuario',
    component: ListarUsuarioComponent
  },
  {
    path: 'usuario/excluirUsuario/:id',
    component: ExcluirUsuarioComponent
  },
  {
    path: 'usuario/editarUsuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'usuario/visualizarUsuario/:id',
    component: VisualizarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
