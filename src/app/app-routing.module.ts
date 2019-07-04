import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(mod => mod.SearchModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
