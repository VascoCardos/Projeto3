import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'p3-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  @Input() error: string | null;
  hide = true;

  form: FormGroup = this.formBuilder.group({
		email: ['', Validators.required],
		password: ['', Validators.required],
		nome: ['', Validators.required],
	});

  constructor(private userService: UserService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<RegistarComponent>) {
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
