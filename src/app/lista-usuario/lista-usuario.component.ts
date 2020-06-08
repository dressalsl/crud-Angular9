import { Usuario } from '../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: Observable<Usuario[]>;


  constructor(private apiService: ApiService, private router: Router) {

   }

  ngOnInit(): void {
    this.recarregarDados();
  }

  recarregarDados() {
    this.usuarios = this.apiService.getListaUsuarios().pipe(map(listaUsuario => listaUsuario.cadastros));

  }

  detalheUsuarios(id: number) {
    this.router.navigate(['details', id]);
  }
}
