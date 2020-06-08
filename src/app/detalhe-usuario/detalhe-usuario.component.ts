import { Usuario } from './../models/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './../api.service';
import { ListaUsuarioComponent } from './../lista-usuario/lista-usuario.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute,private router: Router,
    private usuarioService: ApiService) {
    }

  ngOnInit(): void {
    this.usuario = new Usuario();

    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuario(this.id)
      .subscribe(data => {
        console.log(data)
        this.usuario = data;
      }, error => console.log(error));
  }
  listar(){
    this.router.navigate(['usuarios']);
  }
}
