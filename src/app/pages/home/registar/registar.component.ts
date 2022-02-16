import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'p3-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  name = new FormControl('');
  hide = true;
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

  ngOnInit(): void {
  }

  Registar(): void {
    this.dialogRef.close();
  }

  submit(): void {
		if (this.form.valid) {
			this.authService.login(
				this.form.controls.email.value,
				this.form.controls.password.value,
			).subscribe(
				(success) => this.router.navigate(['/']),
				(err) => this.error = 'Email invalid'
			);
		}
	}

}
