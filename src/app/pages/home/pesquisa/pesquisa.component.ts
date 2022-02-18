import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { NewPostComponent } from '../newPost/newPost.component';
import { RegistarxComponent } from '../registarx/registarx.component';

@Component({
  selector: 'p3-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  show = true;
  form: FormGroup;

  constructor(private authService:AuthService,public dialog: MatDialog,private userService:UserService, private router:Router) {
    this.form = new FormGroup({
			pesquisa: new FormControl('', Validators.required)
		});
  }

  ngOnInit() {
    this.show =this.userService.isLoggedIn
    if(this.show){
      this.authService.getId()
        .subscribe(
          (success) => {
            const temp = JSON.parse(JSON.stringify(success))
            console.log(temp.tipo)
            if (temp.tipo == 'user')
              this.show=false
          } ,
          (err) => console.log(err)
        );
    }
  }

  openDialog(): void {
    this.dialog.open(RegistarxComponent);
  }
  openDialog2(): void {
    this.dialog.open(NewPostComponent);
  }

  submit(){
    if (this.form.valid) {
      this.router.navigate([`/search/${this.form.controls.pesquisa.value}`])
    }
  }

}
