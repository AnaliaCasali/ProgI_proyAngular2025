import { ListaEstudiantes } from './features/lista-estudiantes/lista-estudiantes';
import { Routes } from '@angular/router';
import { VistaEstudiante } from './features/vista-estudiante/vista-estudiante';
import { log } from 'console';
import { Login } from './features/login/login';
import { Header } from './shared/header/header';
import { Home } from './features/home/home';

export const routes: Routes = [
{path: 'vista', component: VistaEstudiante },
{path: 'login', component: Login },
{path: 'lista', component: ListaEstudiantes },
{path: '**', component: Home },

];
