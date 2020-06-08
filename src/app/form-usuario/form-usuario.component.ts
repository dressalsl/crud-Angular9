import { KeyValue } from './../models/key-value';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  sexos: KeyValue[] = [];
  nacionalidades: KeyValue[] = [];
  usuario: Usuario = new Usuario();
  form: FormGroup;

  constructor(private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder) {

      this.form = this.fb.group({
        nome: ['', [Validators.required, Validators.maxLength(255)]],
        idade: ['', [Validators.required, Validators.maxLength(2)]],
        dataNascimento: ['', [Validators.required, Validators.maxLength(9)]],
        cpf: ['', [Validators.required, Validators.maxLength(11)]]
      })
    }

  ngOnInit(): void {
    this.apiService.getSexo().subscribe(s => this.sexos = s.sexo );
    this.apiService.getNacionalidade().subscribe(n => this.nacionalidades = n.nacionalidade );
  }

  public setUsuario(usuario: Usuario) {
    this.usuario.sexo = usuario.sexo;
    this.usuario.nacionalidade = usuario.nacionalidade;

    this.form.get("nome").setValue(usuario.nomeCompleto);
    this.form.get("idade").setValue(usuario.idade);
    this.form.get("dataNascimento").setValue(usuario.dataNascimento);
    this.form.get("cpf").setValue(usuario.cpf);
  }

  public getUsuario(): Usuario {
    this.usuario.nomeCompleto = this.form.get("nome").value;
    this.usuario.idade = parseInt(this.form.get("idade").value);
    this.usuario.dataNascimento = this.form.get("dataNascimento").value;
    this.usuario.cpf = this.form.get("cpf").value;

    return this.usuario;
  }

  public isValid(): boolean {
    return this.form.valid;
  }
}

