import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  @Input() usuario: Usuario = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    profissao: '',
    idade: 0,
    favorito: false
  }

  @Input() listafavoritos: Usuario[] = [];

  constructor(private service: UsuarioService){}

  mudarIconeFavorito():string{
    if(this.usuario.favorito == false){
      return 'inativo'
    }
    return 'ativo'
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.usuario).subscribe(() => {
      this.listafavoritos.splice(this.listafavoritos.indexOf(this.usuario), 1)
    });
  }
}
