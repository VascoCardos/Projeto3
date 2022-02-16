import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'p3-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  @Input() error: string | null;
  hide = true;
  form: FormGroup;


  constructor(private router: Router,private userService: UserService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegistarComponent>) {
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
			this.userService.register(
				this.form.controls.email.value,
				this.form.controls.password.value,
				this.form.controls.nome.value
			).subscribe(
				(success) => window.location.reload(),
				(err) => this.error = 'Email invalid'
			);
		}
	}

}
