import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'p3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  name = new FormControl('');
  hide = true;
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }


  ngOnInit(): void {
  }

  Login(): void {
    this.dialogRef.close();
  }
}
