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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistarComponent } from './registar/registar.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutes,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [HomeComponent,
                LoginComponent,
                RegistarComponent,
                PesquisaComponent]
})
export class HomeModule { }
