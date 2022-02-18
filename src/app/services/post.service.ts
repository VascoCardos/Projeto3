import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http: HttpClient) { }

newPost(author_id : string, author_nome:string, titulo : string, descricao:string,empresa:string) {
  return this.http.post('http://localhost:3000/Post/new', {author_id,author_nome,titulo,descricao,empresa});
}

search(tags : string) {
  return this.http.get(`http://localhost:3000/Post/search/${tags}`);
}

getPost(id : string) {
  return this.http.get(`http://localhost:3000/Post/${id}`);
}
votar(post_id : string, user_id:String) {
  return this.http.post(`http://localhost:3000/Voto/new`, {post_id,user_id});
}

getVoteNumber(id : string){
  return this.http.get(`http://localhost:3000/Voto/count/${id}`);
}

checkVoted(post_id : string, user_id:string){
  return this.http.post(`http://localhost:3000/Voto/voted`, {user_id,post_id});
}

removerVoto(post_id : string, user_id:string){
  return this.http.delete(`http://localhost:3000/Voto/remove/${post_id}/${user_id}`);
}

}
