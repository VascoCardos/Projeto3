import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'p3-registar',
  templateUrl: './registarx.component.html',
  styleUrls: ['./registarx.component.css']
})
export class RegistarxComponent implements OnInit {
  @Input() error: string | null;
  hide = true;
  form: FormGroup;

  options: String[] = [
    "Jornalista",
    "Politico",
    "Cidadão",
    "Administrador"
  ];

  constructor(private router: Router,private userService: UserService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<RegistarxComponent>) {
    this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', Validators.required),
      nome: new FormControl ('', Validators.required),
      afiliacao: new FormControl ('', Validators.required),
      tipo: new FormControl ('', Validators.required)
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
      if (this.form.controls.tipo.value == "Jornalista"){
        this.userService.register(
          this.form.controls.email.value,
          this.form.controls.password.value,
          this.form.controls.nome.value
        ).subscribe(
          (success) => window.location.reload(),
          (err) => this.error = 'Email invalid'
        );
      }else if (this.form.controls.tipo.value == "Politico"){
        this.userService.registerp(
          this.form.controls.email.value,
          this.form.controls.password.value,
          this.form.controls.nome.value,
          this.form.controls.afiliacao.value
        ).subscribe(
          (success) => window.location.reload(),
          (err) => this.error = 'Email invalid'
        );
      }else if (this.form.controls.tipo.value == "Cidadão"){
        this.userService.registerj(
          this.form.controls.email.value,
          this.form.controls.password.value,
          this.form.controls.nome.value,
          this.form.controls.afiliacao.value
        ).subscribe(
          (success) => window.location.reload(),
          (err) => this.error = 'Email invalid'
        );
      }else if (this.form.controls.tipo.value == "Administrador"){
        this.userService.registera(
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
}
