import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  usuario: Usuario = {
    id: 0,
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

  editarUsuario(){
    this.service.editar(this.usuario).subscribe(()=>{
      this.router.navigate(['/listarUsuario']);
    })
  }

  cancelar(){
    this.router.navigate(['/listarUsuario']);
  }

}
