import { Component, OnInit,Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import {Observable} from 'rxjs';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'p3-newPost',
  templateUrl: './newPost.component.html',
  styleUrls: ['./newPost.component.css']
})
export class NewPostComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() error: string | null;

  form: FormGroup;
  filteredPoliticos: Observable<string[]>;

  politicosCtrl = new FormControl('', Validators.required);

  _id=''
  nome = ''

  allPoliticos:any[]
  politicosSelecionados:string[]
  politicos:string[]
  envolvidos:any[]

  @ViewChild('politicoInput')
  politicoInput!: ElementRef<HTMLInputElement>;

  constructor(private postService: PostService,private authService: AuthService, private userService: UserService) {
    this.form = new FormGroup({
			titulo: new FormControl('', Validators.required),
			empresa: new FormControl('', Validators.required),
      descricao: new FormControl ('', Validators.required)
		});
		this.error = null;
    this.politicosSelecionados=[]
    this.politicos = []
    this.allPoliticos = []
    this.envolvidos = []
    this.filteredPoliticos = this.politicosCtrl.valueChanges.pipe(
      startWith(null),
      map((politico: any) => (politico ? this._filter(politico) : this.politicos.slice())),
    );
  }

  ngOnInit() {
    this.authService.getId(
      ).subscribe(
        (success) => {
          const temp = JSON.parse(JSON.stringify(success))
          this._id = temp._id
          this.nome = temp.nome
        } ,
        (err) => console.log(err)
      );
      this.userService.getPoliticos().subscribe(
        (success) => {
          this.allPoliticos = JSON.parse(JSON.stringify(success))
          console.log(this.allPoliticos)
          for (let politico of JSON.parse(JSON.stringify(success))){
            this.politicos.push(politico.nome)
          }
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
        this.form.controls.empresa.value,
        this.envolvidos
      ).subscribe(
        (success) => window.location.reload(),
        (err) => console.log(err)
      );
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value && this.politicosSelecionados.indexOf(value)==-1) {
      this.politicosSelecionados.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.politicosCtrl.setValue(null);
  }

  remove(politico:string): void {
    const index = this.politicosSelecionados.indexOf(politico);

    if (index >= 0) {
      this.politicosSelecionados.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if(this.politicosSelecionados.indexOf(event.option.viewValue)==-1)
      this.politicosSelecionados.push(event.option.viewValue);
    this.envolvidos.push(this.getObject(event.option.viewValue))
    this.politicoInput.nativeElement.value = '';
    this.politicosCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.politicos.filter(politico => politico.toLowerCase().includes(filterValue));
  }

  private getObject(nome: string){
    for (let politico of this.allPoliticos){
      if(politico.nome == nome){
        return politico
      }
    }
  }

}
