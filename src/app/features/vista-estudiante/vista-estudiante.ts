import { FormsModule } from '@angular/forms';
import { Estudiante } from './../../models/estudiante';
import { Component } from '@angular/core';
import { Materia } from '../../models/materia';


@Component({
  selector: 'app-vista-estudiante',
  imports: [FormsModule],
  templateUrl: './vista-estudiante.html',
  styleUrl: './vista-estudiante.css',
})
export class VistaEstudiante {

      nroMateria: string = "1";
      nombre:  string = "Maria Lopez";
      carrera: string = 'tecnicatura en desarrollo de software';

      estudiante: Estudiante = {
        nombre: 'Jose',
        edad: 22,
        id: 1,
        apellido: 'Gonzalez',
        email: 'mail@mail.com',
        activo: false
      };

      foto: string = 'https://ies63lastoscas.edu.ar/assets/imagenes/img/bach-c.jpg';

      listaMaterias: Materia[]= [
        {id:1, nomMateria:'Programación I'},
        {id:2, nomMateria:'Programación II'},
        {id:3, nomMateria:'Base de Datos'},
        {id:4, nomMateria:'Sistemas Operativos'},
      ]

      listaEstudianes: Estudiante[] = [];


      saludar(nombre: string): void {
        alert(`Hola, ${nombre}! Bienvenido a la plataforma.`);
      }



}
