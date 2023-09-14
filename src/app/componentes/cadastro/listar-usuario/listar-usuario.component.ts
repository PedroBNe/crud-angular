import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {

  listaUsuarios: Usuario[] = [];
  paginaAtual: number = 1;
  haMaisUsuarios: boolean = true;
  filtro: string = '';
  favorito: boolean = false;
  listaFavoritos: Usuario[] = []
  titulo: string = 'Usuários'

  constructor(
    private service: UsuarioService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito).subscribe((listaUsuarios) => {
      this.listaUsuarios = listaUsuarios;
    })
  }

  carregarMaisUsuarios(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaUsuarios) => {
        this.listaUsuarios.push(...listaUsuarios);
        if(!listaUsuarios.length){
          this.haMaisUsuarios = false;
        }
      })
  }

  pesquisarUsuarios(){
    this.haMaisUsuarios = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaUsuarios =>{
        this.listaUsuarios = listaUsuarios
      })
  }

  recarregarComponente(){
    this.favorito = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos(){
    this.titulo = 'Favoritos'
    this.favorito = true;
    this.haMaisUsuarios = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaUsuariosFavoritos => {
        this.listaUsuarios = listaUsuariosFavoritos;
        this.listaFavoritos = listaUsuariosFavoritos;
      })
  }
}
