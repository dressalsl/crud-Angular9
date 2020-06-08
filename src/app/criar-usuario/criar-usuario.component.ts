import { FormUsuarioComponent } from './../form-usuario/form-usuario.component';
import { ApiService } from './../api.service';
import { Usuario } from '../models/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {
  @ViewChild("formusuario")
  private formUsuario: FormUsuarioComponent;
  usuario: Usuario = new Usuario();
  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }
  newUsuario(): void {
    this.usuario = new Usuario();
  }
  salvar() {
    this.apiService.criarUsuario(this.formUsuario.getUsuario())
      .subscribe(
        data => console.log(data),
        error => console.log(error));
  }
  onSubmit() {
    this.salvar();
  }
  listar() {
    this.router.navigate(['usuarios']);

  }
}
