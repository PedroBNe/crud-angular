import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  usuario: Usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    profissao: '',
    idade: 0
  }

  constructor(
    private service: UsuarioService,
    private router: Router
    ){

  }

  cadastrarUsuario(){
    this.service.criar(this.usuario).subscribe(()=> {
      this.router.navigate(['/listarUsuario']);
    })
  }

  cancelar(){
    this.router.navigate(['/listarUsuario']);
  }

}
