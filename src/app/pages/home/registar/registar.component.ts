import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'p3-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  hide = true;
  constructor(public dialogRef: MatDialogRef<RegistarComponent>) { }

  ngOnInit(): void {
  }

  Registar(): void {
    this.dialogRef.close();
  }
}
