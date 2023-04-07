import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PaintsComponent } from './paints/paints.component';
import { PaletteComponent } from './palette/palette.component';
import { PostComponent } from './posts/post/post.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PigmentsComponent } from './pigments/pigments.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'palette',
    component: PaletteComponent
  },
  {
    path: 'paints',
    component: PaintsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pigments',
    component: PigmentsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
