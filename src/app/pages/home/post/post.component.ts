import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'p3-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any
  id = ''
  loggedIn = false
  numberOfVotes = '0'
  voted = false
  myId=''

  constructor(private router:Router, private authService: AuthService, private postService : PostService, private userService : UserService) { }

  ngOnInit() {
    this.loggedIn =this.userService.isLoggedIn
    this.id = this.router.url.split('/')[2]
    this.postService.getPost(this.id).subscribe(
      (success) => {
        this.post=JSON.parse(JSON.stringify(success))
        console.log(this.post.titulo)
      } ,
      (err) => console.log(err)
    );

    this.postService.getVoteNumber(this.id).subscribe(
      (success) => {
        this.numberOfVotes=JSON.parse(JSON.stringify(success)).voteCount
      } ,
      (err) => console.log(err)
    );

    if(this.userService.isLoggedIn){
      this.authService.getId()
      .subscribe(
        (success) => {
          const temp = JSON.parse(JSON.stringify(success))
          this.myId = temp._id
          console.log(this.id)
          console.log(this.myId)
          this.postService.checkVoted(this.id,this.myId).subscribe(
            (success) => {
              this.voted=JSON.parse(JSON.stringify(success)).voted
            } ,
            (err) => console.log(err)
          );

        } ,
        (err) => console.log(err)
      );
    }
  }

  goToPerfil(){
    this.router.navigate([`/perfil/${this.post.author_id}`])
  }

  votar(){
    if(!this.voted){
      this.postService.votar(this.id,this.myId).subscribe(
        (success) => {
          console.log(success)
        } ,
        (err) => console.log(err)
      );
      console.log("voted")
      this.voted=true;
      let temp=parseInt(this.numberOfVotes)+1
      this.numberOfVotes = temp.toString()
    }else{
      this.postService.removerVoto(this.id,this.myId).subscribe(
        (success) => {
          console.log(success)
          this.voted=false;
          let temp=parseInt(this.numberOfVotes)-1
          this.numberOfVotes = temp.toString()
        } ,
        (err) => console.log(err)
      );
    }
  }

}
