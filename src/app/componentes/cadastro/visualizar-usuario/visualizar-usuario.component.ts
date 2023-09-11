import { Usuario } from './../usuario';
import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-usuario',
  templateUrl: './visualizar-usuario.component.html',
  styleUrls: ['./visualizar-usuario.component.css']
})
export class VisualizarUsuarioComponent {

  usuario: Usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    profissao: '',
    idade: 0
  }

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
    ){

  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((usuario)=> {
      this.usuario = usuario;
    })
  }


}
