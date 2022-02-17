import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: PesquisaComponent
			},
			{
				path: 'perfil/:id',
				component: PerfilComponent
			},
      {
				path: 'post/:id',
				component: PostComponent
			}
		]
	}
];

export const HomeRoutes = RouterModule.forChild(routes);
