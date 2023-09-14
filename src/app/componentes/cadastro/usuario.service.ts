import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favorito: boolean): Observable<Usuario[]> {

    const itensPorPagina = 6;

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    if(filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }

    if(favorito) {
      params = params.set("favorito", true)
    }

    return this.http.get<Usuario[]>(this.API, { params: params })
  }

  criar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario)
  }

  editar(usuario: Usuario): Observable<Usuario> {
    const url = `${this.API}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)
  }

  mudarFavorito(usuario: Usuario): Observable<Usuario> {
    usuario.favorito = !usuario.favorito
    return this.editar(usuario)
  }

  excluir(id:number): Observable<Usuario>{
    const url = `${this.API}/${id}`
    return this.http.delete<Usuario>(url)
  }

  buscarPorId(id:number): Observable<Usuario>{
    const url = `${this.API}/${id}`
    return this.http.get<Usuario>(url)
  }

  visualizarUsuario(usuario: Usuario): Observable<Usuario>{
    const url = `${this.API}/${usuario.id}`
    return this.http.get<Usuario>(url)
  }

}
