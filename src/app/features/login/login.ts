import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  styleUrl: './login.css',
  template: `<div><p>login Funciona!</p>
    <p>Usuario {{usuario}}</p>
    <p>Contraseña {{contrasena}}</p>
    </div> `
  ,
})
export class Login {
  @Input() usuario: string = '';
  @Input() contrasena: string = '';

    constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.usuario = params.get('usuario') ?? '';
      this.contrasena = params.get('contrasena') ?? '';
    });
  }
}
