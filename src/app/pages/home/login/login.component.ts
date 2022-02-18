import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'p3-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;
  form: FormGroup;


  hide = true;
  constructor(private router: Router,private authService: AuthService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>) {
    this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
		});
		this.error = null;
  }


  ngOnInit(): void {
  }

  Login(): void {
    this.dialogRef.close();
  }

  submit(): void {
		if (this.form.valid) {
			this.authService.login(
				this.form.controls.email.value,
				this.form.controls.password.value,
			).subscribe(
				(success) => window.location.reload(),
				(err) =>{
          console.log(err)
          this.error = 'Email e/ou Password incorretos'
        }
			);
		}
	}

}
