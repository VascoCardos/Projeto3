import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				component: PesquisaComponent
			}

		]
	}
];

export const HomeRoutes = RouterModule.forChild(routes);
