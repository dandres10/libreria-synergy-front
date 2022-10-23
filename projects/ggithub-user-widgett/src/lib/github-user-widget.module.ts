import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BuscadorUsuarioComponent } from './components/buscador-usuario/buscador-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';


const COMPONENT = [UsuarioComponent, BuscadorUsuarioComponent]

@NgModule({
  declarations: COMPONENT,
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: COMPONENT
})
export class GithubUserWidgetModule { }

