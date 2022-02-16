import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'p3-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show = true

  constructor(private authService: AuthService,private userService: UserService, public formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.show =!this.userService.isLoggedIn
  }

  openDialog(): void {
    this.dialog.open(LoginComponent);
  }

  openDialog2(): void {
    this.dialog.open(RegistarComponent);
  }

  sair(): void {
    this.authService.logout()
    window.location.reload()
  }
}
