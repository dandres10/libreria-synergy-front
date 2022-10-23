import { Component, Input, OnInit } from '@angular/core';

import { USUARIOAPI } from '../../constants/usuario';
import { Usuario } from '../../interfaces/usuario.interface';


@Component({
  selector: 'guw-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  @Input() busqueda!: string;
  usuario!: Usuario;
  constructor() { }

  ngOnInit(): void {
    if (this.busqueda === undefined || this.busqueda === null || this.busqueda === '') {
      console.log('Usando la constante');
      this.usuario = USUARIOAPI;
    } else {
      console.log('Buscando en la api', this.busqueda);
      // this.buscadorServicio.obtenerDatosUsuario(this.busqueda).then(
      //   (data: Usuario) => {
      //     this.usuario = data;
      //   }
      // );
      this.usuario = USUARIOAPI;
    }

  }

}
