import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CadastrarUsuarioComponent } from './componentes/cadastro/cadastrar-usuario/cadastrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { ListarUsuarioComponent } from './componentes/cadastro/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './componentes/cadastro/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirUsuarioComponent } from './componentes/cadastro/excluir-usuario/excluir-usuario.component';
import { EditarUsuarioComponent } from './componentes/cadastro/editar-usuario/editar-usuario.component';
import { VisualizarUsuarioComponent } from './componentes/cadastro/visualizar-usuario/visualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    UsuarioComponent,
    ExcluirUsuarioComponent,
    EditarUsuarioComponent,
    VisualizarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
