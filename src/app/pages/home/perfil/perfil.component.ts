import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
    this._id = this.router.url.split('/')[2]
    this.userService.getPerfil(this._id).subscribe(
        (success) => {
          this.user=JSON.parse(JSON.stringify(success))
        } ,
        (err) => console.log(err)
      );
  }

}
