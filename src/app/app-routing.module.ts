import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'

import { AccessGuard } from './guards/access.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent }
	// {
	// 	path: '',
	// 	loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
	// 	canActivate: [AuthGuard]
	// },
	// {
	// 	path: 'auth',
	// 	loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule),
	// 	canActivate: [AccessGuard]
	// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
