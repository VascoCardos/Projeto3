import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'p3-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  postShow = false
  userShow = false
  postResultados:any
  userResultados:any
  tag = ''

  constructor(private userService:UserService, private postService: PostService, private router : Router) { }

  ngOnInit() {
    this.tag = this.router.url.split('/')[2]
    this.postService.search(this.tag).subscribe(
      (success) => {
        this.postResultados=JSON.parse(JSON.stringify(success))
        if(this.postResultados.length == 0){
          this.postShow = true
        }
      } ,
      (err) => console.log(err)
    );
    this.userService.search(this.tag).subscribe(
      (success) => {
        this.userResultados=JSON.parse(JSON.stringify(success))
        if(this.userResultados.length == 0){
          this.userShow = true
        }
      } ,
      (err) => console.log(err)
    );
  }

  goToPost(id:string){
    this.router.navigate([`/post/${id}`])
  }

  goToUser(id:string){
    this.router.navigate([`/perfil/${id}`])
  }

}
