import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JWT } from '../types/jwt';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) { }

	login(email: string, password: string) {
		return this.http.post<JWT>('localhost:3000/Authenticate', { email, password}).pipe(
			map(
				(res: JWT) => {
					if (res.auth) {
						localStorage.setItem('auth_token', res.token);
					}
				},
			)
		);
	}

	register(email: string, password: string, firstname: string, lastname: string,photoUrl:string) {
		return this.http.post('localhost:3000/user/new', { email, password});
	}

	logout(): void {
		localStorage.clear();	
		this.router.navigate(['auth']);
	}
}
