import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessGuard } from './guards/access.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
