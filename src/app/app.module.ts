import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PaletteComponent } from './palette/palette.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PaintsComponent } from './paints/paints.component';
import { PigmentsComponent } from './pigments/pigments.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { PostComponent } from './posts/post/post.component';
import { HomeComponent } from './home/home.component';
import { PostFormComponent } from './posts/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PaletteComponent,
    LoginComponent,
    ProfileComponent,
    PaintsComponent,
    PigmentsComponent,
    SignupComponent,
    PostComponent,
    HomeComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
