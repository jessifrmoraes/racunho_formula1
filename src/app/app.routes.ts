import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { PessoasListagem } from './pages/pessoas-listagem/pessoas-listagem';
import { Cliente } from './pages/cliente/cliente';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'clientes', component: Cliente },
  { path: 'cliente', component: PessoasListagem }
];

