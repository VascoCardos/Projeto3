import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'p3-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user:any
  me = false
  _id = ''
  posts:any[]
  politico = false
  jornalista = false

  constructor(private router:Router, private userService:UserService, private postService : PostService) {
    this.posts = []
   }

  ngOnInit() {
    this._id = this.router.url.split('/')[2]
    this.userService.getPerfil(this._id).subscribe(
        (success) => {
          this.user=JSON.parse(JSON.stringify(success))
          if (this.user.tipo == 'politico'){
            this.politico = true
            this.postService.getEnvolvido(this._id).subscribe(
              (success) => {
                this.posts=JSON.parse(JSON.stringify(success))
              } ,
              (err) => console.log(err)
            );
          }else if (this.user.tipo == 'jornalista' || this.user.tipo == 'admin'){
            this.jornalista = true
            this.postService.getAutor(this._id).subscribe(
              (success) => {
                this.posts=JSON.parse(JSON.stringify(success))
              } ,
              (err) => console.log(err)
            );
          }
        } ,
        (err) => console.log(err)
      );
  }

  goToPost(id:string){
    this.router.navigate([`/post/${id}`])
  }

}
