import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent
			}

		]
	}
];

export const HomeRoutes = RouterModule.forChild(routes);
