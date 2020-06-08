import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-nacionalidade',
  templateUrl: './lista-nacionalidade.component.html',
  styleUrls: ['./lista-nacionalidade.component.css']
})
export class ListaNacionalidadeComponent implements OnInit {
  usuarios: Observable<Usuario[]>;
  constructor(private apiService: ApiService, private router: Router) { }

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
