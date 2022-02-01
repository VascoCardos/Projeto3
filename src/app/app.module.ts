import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
          tokenGetter: () => localStorage.getItem('auth_token'),
          allowedDomains: ['localhost:4200']
          
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
