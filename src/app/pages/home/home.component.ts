import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'p3-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(LoginComponent);
  }

  openDialog2(): void {
    this.dialog.open(RegistarComponent);
  }
}
