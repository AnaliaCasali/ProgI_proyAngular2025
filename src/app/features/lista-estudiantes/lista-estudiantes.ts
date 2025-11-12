import { Estudiante } from './../../models/estudiante';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-estudiantes',
  imports: [CommonModule],
  templateUrl: './lista-estudiantes.html',
  styleUrl: './lista-estudiantes.css',
})
export class ListaEstudiantes implements OnInit {
  estudiantes:Estudiante[] = [];
  cargando = true;             // Indicador de carga
  error: string | null = null; // Para manejar errores

  private cdr = inject(ChangeDetectorRef);

  private estudianteService = inject(EstudianteService);
    ngOnInit() {
    this.estudianteService.obtenerEstudiantes().subscribe({
      next: (data) => {
        console.log(JSON.stringify(data));
        this.estudiantes = data;
        this.cargando = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al obtener estudiantes:', err);
        this.error = 'No se pudieron cargar los estudiantes.';
        this.cargando = false;
        this.cdr.markForCheck();
      }
    });
  }
}
