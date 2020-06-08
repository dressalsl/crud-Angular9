import { ListagemSexo } from './models/listagem-sexo';
import { ListagemNacionalidade } from './models/listagem-nacionalidade';
import { environment } from './../environments/environment.prod';
import { Usuario } from './models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListagemUsuario } from './models/listagem-usuario';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSexo(): Observable<ListagemSexo> {

    return this.http.get<ListagemSexo>(`${environment.url}/sexo/listar`);
  }
  getNacionalidade(): Observable<ListagemNacionalidade> {
    return this.http.get<ListagemNacionalidade>(`${environment.url}/nacionalidade/listar`);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${environment.url}/cadastro/obter/${id}`);
  }

  criarUsuario(usuario: Usuario): Observable<Object> {
    return this.http.post(`${environment.url}/cadastro/incluir`, usuario);
  }
  atualizarUsuario(cadastrar: Usuario): Observable<any> {
    return this.http.put(`${environment.url}/cadastro/atualizar`, cadastrar);
  }
  getListaUsuarios(): Observable<ListagemUsuario> {
    return this.http.get<ListagemUsuario>(`${environment.url}/cadastro/listar`);
  }

}
