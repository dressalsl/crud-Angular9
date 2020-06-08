import { AuthenticationInterceptor } from './interceptors/authenticationinterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { ListaSexoComponent } from './lista-sexo/lista-sexo.component';
import { ListaNacionalidadeComponent } from './lista-nacionalidade/lista-nacionalidade.component';


@NgModule({
  declarations: [
    AppComponent,
    CriarUsuarioComponent,
    DetalheUsuarioComponent,
    ListaUsuarioComponent,
    AtualizarUsuarioComponent,
    FormUsuarioComponent,
    ListaSexoComponent,
    ListaNacionalidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxErrorsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
