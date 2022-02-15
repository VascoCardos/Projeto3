import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'p3-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  name = new FormControl('');
  hide = true;
  constructor(public dialogRef: MatDialogRef<RegistarComponent>) { }

  ngOnInit(): void {
  }

  Registar(): void {
    this.dialogRef.close();
  }

  profileForm = new FormGroup({

    email: new FormControl('', Validators.required),
    nome: new FormControl ('', Validators.required),
    password: new FormControl('', Validators.required)
  });
}
