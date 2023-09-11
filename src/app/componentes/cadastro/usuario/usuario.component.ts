import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario';

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
    idade: 0
  }
}
