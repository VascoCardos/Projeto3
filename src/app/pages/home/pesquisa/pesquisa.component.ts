import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog,private userService:UserService) { }

  ngOnInit() {
    this.show =this.userService.isLoggedIn
  }

  openDialog(): void {
    this.dialog.open(RegistarxComponent);
  }
  openDialog2(): void {
    this.dialog.open(NewPostComponent);
  }

}
