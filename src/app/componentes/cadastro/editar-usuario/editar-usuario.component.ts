import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{

  formulario!: FormGroup

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private FormBuilder: FormBuilder
  ){

  }

  ngOnInit(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((usuario)=> {
      this.formulario = this.FormBuilder.group({
        id: [usuario.id],
        nome: [usuario.nome, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        sobrenome: [usuario.sobrenome, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        email: [usuario.email, [Validators.email, Validators.required]],
        profissao: [usuario.profissao, [Validators.required]],
        idade: [usuario.idade, [Validators.required]],
        favorito: [usuario.favorito]
      })
    })
  }

  editarUsuario() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarUsuario'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarUsuario']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }
}
