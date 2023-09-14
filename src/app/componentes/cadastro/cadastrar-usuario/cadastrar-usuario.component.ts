import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  formulario!: FormGroup

  constructor(
    private service: UsuarioService,
    private router: Router,
    private formBuilder: FormBuilder
    ){

  }

  ngOnInit() :void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      sobrenome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      email: ['', [Validators.email, Validators.required]],
      profissao: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      favorito: [false]
    })
  }

  cadastrarUsuario(){
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=> {
      this.router.navigate(['/listarUsuario']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarUsuario']);
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
