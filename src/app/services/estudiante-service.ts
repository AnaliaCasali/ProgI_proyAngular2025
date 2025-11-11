import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Estudiante } from '../models/estudiante';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(environment.estudiantesUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }

}
