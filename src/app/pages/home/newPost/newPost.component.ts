import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'p3-newPost',
  templateUrl: './newPost.component.html',
  styleUrls: ['./newPost.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() error: string | null;
  form: FormGroup;

  _id=''
  nome = ''

  constructor(private postService: PostService,private authService: AuthService, private userService: UserService) {
    this.form = new FormGroup({
			titulo: new FormControl('', Validators.required),
			empresa: new FormControl('', Validators.required),
      descricao: new FormControl ('', Validators.required),
      envolvidos: new FormControl ('')
		});
		this.error = null;
  }

  ngOnInit() {
    this.authService.getId(
      ).subscribe(
        (success) => {
          const temp = JSON.parse(JSON.stringify(success))
          this._id = temp._id
          console.log(temp.nome)
          this.nome = temp.nome
        } ,
        (err) => console.log(err)
      );
  }

  submit(){
      if (this.form.valid) {
      this.postService.newPost(
        this._id,
        this.nome,
        this.form.controls.titulo.value,
        this.form.controls.descricao.value,
        this.form.controls.empresa.value
      ).subscribe(
        (success) => window.location.reload(),
        (err) => console.log(err)
      );
    }
  }

}
