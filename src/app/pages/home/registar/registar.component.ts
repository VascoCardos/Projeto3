<<<<<<< HEAD
import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

=======
import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
>>>>>>> 50a33e7bc26368e9b8a8efa96e3e1cca5fe5c5c9

@Component({
  selector: 'p3-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  @Input() error: string | null;
  hide = true;
<<<<<<< HEAD
  @Input() error: string | null;
  form: FormGroup;


  constructor(private router: Router,private authService: AuthService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegistarComponent>) {
    this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
      nome: new FormControl ('', Validators.required)
		});
		this.error = null;

  }
=======

  form: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required],
		nome: ['', Validators.required],
	});

  constructor(private userService: UserService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<RegistarComponent>) {
    this.error = null;
   }
>>>>>>> 50a33e7bc26368e9b8a8efa96e3e1cca5fe5c5c9

  ngOnInit(): void {
  }

  Registar(): void {
    this.dialogRef.close();
  }

  submit(): void {
		if (this.form.valid) {
<<<<<<< HEAD
			this.authService.login(
				this.form.controls.email.value,
				this.form.controls.password.value,
			).subscribe(
				(success) => this.router.navigate(['/']),
=======
			this.userService.register(
				this.form.controls.email.value,
				this.form.controls.password.value,
				this.form.controls.nome.value
			).subscribe(
				(success) => window.location.reload(),
>>>>>>> 50a33e7bc26368e9b8a8efa96e3e1cca5fe5c5c9
				(err) => this.error = 'Email invalid'
			);
		}
	}
<<<<<<< HEAD
=======

>>>>>>> 50a33e7bc26368e9b8a8efa96e3e1cca5fe5c5c9

}
