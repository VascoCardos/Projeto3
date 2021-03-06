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
		return this.http.post('http://localhost:3000/user/new', { email, password, nome});
	}

  registerj(email: string, password: string, nome: string, afiliacao:string) {
		return this.http.post('http://localhost:3000/user/new/jornalista', { email, password, nome,afiliacao});
	}

  registerp(email: string, password: string, nome: string, afiliacao:string) {
		return this.http.post('http://localhost:3000/user/new/politico', { email, password, nome,afiliacao});
	}

  registera(email: string, password: string, nome: string) {
		return this.http.post('http://localhost:3000/user/new/admin', { email, password, nome});
	}

  getPerfil(id:string){
    return this.http.get(`http://localhost:3000/user/${id}`);
  }

  search(tags : string) {
    return this.http.get(`http://localhost:3000/user/search/${tags}`);
  }

  getPoliticos(){
    return this.http.get(`http://localhost:3000/user/politicos/list`);
  }
}

