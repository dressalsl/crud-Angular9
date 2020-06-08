import { FormUsuarioComponent } from './../form-usuario/form-usuario.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.css']
})
export class AtualizarUsuarioComponent implements OnInit {
  @ViewChild("formusuario")
  private formUsuario: FormUsuarioComponent;
  id: number;
  usuario: Usuario = new Usuario();

  constructor(private route: ActivatedRoute, private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];

    this.apiService.getUsuario(this.id)
      .subscribe(
        data => {
        console.log(data);
        this.usuario = data;
      }, error => console.log(error));
  }

  atualizarUsuario() {
    this.apiService.criarUsuario(this.formUsuario.getUsuario())
    // this.formUsuario.setUsuario(usuario.id)
      .subscribe(
        data => console.log(data),
         error => console.log(error));
    this.usuario = new Usuario();
    this.listar();

  }
  onSubmit() {
    this.atualizarUsuario();
  }

  listar() {
    this.router.navigate(['/usuarios']);
  }
  onChangeNacionalidade() {

  }

  onChangeSexo(){

  }

}
