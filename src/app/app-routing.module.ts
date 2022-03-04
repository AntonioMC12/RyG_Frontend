import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/create-user/create-user.module').then( m => m.CreateUserPageModule)
  },
  {
    path: 'create-premio',
    loadChildren: () => import('./pages/create-premio/create-premio.module').then( m => m.CreatePremioPageModule)
  },
  {
    path: 'edit-premio',
    loadChildren: () => import('./pages/edit-premio/edit-premio.module').then( m => m.EditPremioPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
    {
    path: 'crear-boleto',
    loadChildren: () => import('./pages/crear-boleto/crear-boleto.module').then( m => m.CrearBoletoPageModule)
  },
 
  {
    path: 'crear-participaciones',
    loadChildren: () => import('./pages/crear-participaciones/crear-participaciones.module').then( m => m.CrearParticipacionesPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}