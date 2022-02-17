import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'p3-newPost',
  templateUrl: './newPost.component.html',
  styleUrls: ['./newPost.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() error: string | null;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
			titulo: new FormControl('', Validators.required),
			empresa: new FormControl('', Validators.required),
      descricao: new FormControl ('', Validators.required),
      envolvidos: new FormControl ('')
		});
		this.error = null;
  }

  ngOnInit() {
  }

  submit(){

  }

}
