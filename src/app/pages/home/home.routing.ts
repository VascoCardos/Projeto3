import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';
import { ResultadosComponent } from './resultados/resultados.component';


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
			},
      {
				path: 'search/:keywords',
				component: ResultadosComponent
			}
		]
	}
];

export const HomeRoutes = RouterModule.forChild(routes);
