import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'p3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  constructor( private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>) { }


  ngOnInit(): void {
  }

  Login(): void {
    this.dialogRef.close();
  }

  profileForm =  this.formBuilder.group({

    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required )
  });

  submit(): void {
		if (this.profileForm.valid) {
			this.authService.register(
				this.profileForm.controls.email.value,
				this.profileForm.controls.password.value,
				this.profileForm.controls.nome.value,
			).subscribe(
				(success) => this.router.navigate(['/auth']),
				(err) => this.error = 'Email invalid'
			);
		}
	}
  
}
