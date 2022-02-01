import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private helper: JwtHelperService) { }

  public get isLoggedIn(): boolean {
		const token = localStorage.getItem('auth_token');
		if (token) { return !this.helper.isTokenExpired(token as string); }
		else { return false; }
	}
}

