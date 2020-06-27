import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';


const routes: Routes = [
  {
    path: 'landing',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./music/music.module').then( m => m.MusicModule )
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) },
  { path: '**', redirectTo: 'landing/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
