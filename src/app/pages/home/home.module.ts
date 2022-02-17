import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutes } from './home.routing';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { RegistarComponent } from './registar/registar.component';
import { RegistarxComponent } from './registarx/registarx.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import {ResultadosComponent} from './resultados/resultados.component';
import { NewPostComponent } from './newPost/newPost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutes,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [HomeComponent,
                LoginComponent,
                RegistarComponent,
                RegistarxComponent,
                PesquisaComponent,
                ResultadosComponent,
                NewPostComponent,
                PerfilComponent,
                PostComponent]
})
export class HomeModule { }
