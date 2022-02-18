import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'p3-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  show = false
  resultados:any
  tag = ''

  constructor(private postService: PostService, private router : Router) { }

  ngOnInit() {
    this.tag = this.router.url.split('/')[2]
    this.postService.search(this.tag).subscribe(
      (success) => {
        this.resultados=JSON.parse(JSON.stringify(success))
        if(this.resultados.length == 0){
          this.show = true
        }
      } ,
      (err) => console.log(err)
    );
  }

  goToPost(id:string){
    this.router.navigate([`/post/${id}`])
  }

}
