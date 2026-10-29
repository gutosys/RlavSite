import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Home - Rlav Lavanderia Autônoma'
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then(m => m.SobreComponent),
    title: 'Sobre Nós - Rlav Lavanderia Autônoma'
  },
  {
    path: 'promocoes',
    loadComponent: () => import('./pages/promocoes/promocoes.component').then(m => m.PromocoesComponent),
    title: 'Promoções - Rlav Lavanderia Autônoma'
  },
  {
    path: 'valores',
    loadComponent: () => import('./pages/valores/valores.component').then(m => m.ValoresComponent),
    title: 'Valores - Rlav Lavanderia Autônoma'
  },
  {
    path: 'unidades',
    loadComponent: () => import('./pages/unidades/unidades.component').then(m => m.UnidadesComponent),
    title: 'Unidades - Rlav Lavanderia Autônoma'
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent),
    title: 'Contato - Rlav Lavanderia Autônoma'
  },
  {
    path: 'seja-um-franqueado',
    loadComponent: () => import('./pages/franqueado/franqueado.component').then(m => m.FranqueadoComponent),
    title: 'Seja Um Franqueado - Rlav Lavanderia Autônoma'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
