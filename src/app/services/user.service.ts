import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private helper: JwtHelperService) { }

  public get isLoggedIn(): boolean {
		const token = localStorage.getItem('auth_token');
		if (token) { return !this.helper.isTokenExpired(token as string); }
		else { return false; }
	}

  register(email: string, password: string, nome: string) {
		return this.http.post('http://localhost:3000/user/new', { email, password});
	}
}

